const jwt = require("jsonwebtoken");
const redis = require("redis");
const { REDIS_URI, JWT_SECRET } = require("../secret");

const redisClient = redis.createClient(process.env.REDIS_URI)
  ? redis.createClient(process.env.REDIS_URI)
  : redis.createClient(REDIS_URI);

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

const setRedis = (token, id) => {
  redisClient.set(token, id);
};
const getUserWToken = (user) => {
  const { email, id } = user;
  const token = signToken(email);
  setRedis(token, id);
  return { success: "true", userId: id, token };
};
const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json("incorrect form submission");
  }

  const hash = bcrypt.hashSync(password);
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date(),
          })
          .then((user) => {
            res.status(200).json(getUserWToken(user[0]));
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("unable to register"));
};

module.exports = {
  handleRegister: handleRegister,
};
