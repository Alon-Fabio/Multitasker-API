const jwt = require("jsonwebtoken");
const { REDIS_URI, JWT_SECRET } = require("../secret");

const redis = require("redis");
const redisProsURI = process.env.REDIS_URI || REDIS_URI;
const redisClient = redis.createClient(redisProsURI);
redisClient.on("error", function (err) {
  console.log("Error " + err);
});

const getUsers = async (db, res, bcrypt, req) => {
  console.log("getUsers <=================================================");

  const admin = await Promise.resolve(dataFetch(db, bcrypt, req)).catch((err) =>
    console.log("Fadminbio Error!", err)
  );

  if (admin?.id === 1) {
    // change to 1 after db restart.
    let users = await db("users")
      .select("*")
      .returning("*")
      .then((users) => users)
      .catch((err) => res.status(501).json(err));
    let login = await db("login")
      .select("*")
      .returning("*")
      .then((users) => users)
      .catch((err) => res.status(501).json(err));

    res.status(200).json({ users: [...users], login: [...login] });
    // Replace with update galleries.
  } else res.status(500).json("nop");
};

const dataFetch = (db, bcrypt, req) => {
  // console.log("data fetch");
  let { email, password } = req.body;
  if (
    email &&
    password &&
    typeof email === "string" &&
    typeof password === "string"
  ) {
    password = req.body.password;
    console.log(email, password);
    email = req.body.email.toLowerCase();
  } else {
    console.log(email, password, "uppercase");
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
          .catch((err) => Promise.reject("databaseErr"));
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
        return reject("getAuthTokenId" || "no data");
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
    .catch((err) => Error.log("Promise rejected"));
};

const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authentication } = req.headers;
  // console.log("Start to sign in", authentication, req.headers);
  return authentication === true
    ? getAuthTokenId(authentication)
        .then((userData) => res.status(200).json(userData))
        .catch((err) => res.status(400).json("getAuthTokenId"))
    : dataFetch(db, bcrypt, req)
        .then((dataFromDb) => {
          return dataFromDb.id && dataFromDb.email
            ? createSession(dataFromDb)
            : Promise.reject(dataFromDb);
        })
        .then((userData) => res.status(200).json(userData))
        .catch((err) =>
          res.status(400).json("signinAuthentication", authentication, err)
        );
};

module.exports = {
  signinAuthentication: signinAuthentication,
  redisClient: redisClient,
  getUsers: getUsers,
};
