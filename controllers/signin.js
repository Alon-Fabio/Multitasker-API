const jwt = require("jsonwebtoken");
const { REDIS_URI, JWT_SECRET } = require("../secret");

const redis = require("redis");
const redisProsURI = process.env.REDIS_URI || REDIS_URI;
const redisClient = redis.createClient({
  redisProsURI,
  retry_strategy: function (options) {
    if (options.error && options.error.code === "ECONNREFUSED") {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error("The server refused the connection");
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error("Retry time exhausted");
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
  },
});

const dataFetch = (db, bcrypt, req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("No email or pass");
    return Promise.reject("incorrect form submission");
  }

  return db
    .select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);

      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then((user) => {
            return user[0];
          })
          .catch((err) => Promise.reject(err));
      } else {
        return Promise.reject("Sorry.. something went wrong.. please try");
      }
    })
    .catch((err) =>
      Promise.reject("Sorry.. something went wrong.. please try")
    );
};

const getAuthTokenId = (authorization) => {
  return new Promise((resolve, reject) => {
    return redisClient.get(authorization, (err, reply) => {
      if (err || !reply) {
        return reject(err || "no data");
      }
      return resolve({ id: reply });
    });
  });
};

const signToken = (email) => {
  const jwtPayload = email;
  token = jwt.sign(
    { jwtPayload },
    process.env.JWT_SECRET ? process.env.JWT_SECRET : JWT_SECRET,
    {
      expiresIn: "2d",
    }
  );
  return token;
};

const setToken = (token, id) => {
  return Promise.resolve(redisClient.set(token, id));
};

const createSession = (user) => {
  //JWT web token. return user
  const { email, id } = user;
  const token = signToken(email);
  return setToken(token, id)
    .then(() => {
      return { success: "true", userId: id, token };
    })
    .catch(console.log);
};
const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authentication } = req.headers;
  return authentication
    ? getAuthTokenId(authentication)
        .then((userData) => res.status(200).json(userData))
        .catch((err) => res.status(400).json(err))
    : dataFetch(db, bcrypt, req)
        .then((dataFromDb) => {
          return dataFromDb.id && dataFromDb.email
            ? createSession(dataFromDb)
            : Promise.reject(dataFromDb);
        })
        .then((userData) => res.status(200).json(userData))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
  signinAuthentication: signinAuthentication,
  redisClient: redisClient,
};
