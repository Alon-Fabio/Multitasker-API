const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const morgan = require("morgan");
const path = require("path");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const auth = require("./controllers/auth");

const { POSTGRES_URI } = require("./secret");

const whitelist = [
  "http://multitasker.alonfabio.com",
  "http://31.168.215.56/",
  "https://www.alonfabio.com/",
  "https://multitasker.alonfabio.com/",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("404 Not allowed"));
    }
  },
};

const db = knex({
  // connect to your own database here
  client: "postgres",
  connection: process.env.POSTGRES_URI,
});

const app = express();

app.use(morgan("combined"));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  // db.select()
  //   .from("users")
  //   .then((user) => {
  //     console.log(user);
  //   })
  //   .catch((err) => console.log("error getting user " + err));

  // res.send("It's working and updating !");
});
app.post("/signin", signin.signinAuthentication(db, bcrypt));
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
app.get("/profile/:id", auth.getAuthentication, (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.post("/profile/:id", auth.getAuthentication, (req, res) => {
  profile.handleProfilePost(req, res, db);
});
app.put("/image", auth.getAuthentication, (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageurl", auth.getAuthentication, (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(8080, () => {
  console.log("app is running on port 8080");
});
