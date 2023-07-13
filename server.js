"use strict";

const express = require("express");
// const https = require("https");
// const http = require("http");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

// const SSLoptions = {
//   key: fs.readFileSync("./host.key"),
//   cert: fs.readFileSync("./host.cert"),
// };

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const auth = require("./controllers/auth");
const gallery = require("./controllers/gallery");

const { POSTGRES_URI } = require("./secret");

const whitelist = [
  "https://www.alonfabio.com",
  "https://www.alonfabio.com/Per/Photoraphy",
  "https://www.alonfabio.com/Per/Gallery",
  "https://multitasker.alonfabio.com",
  "http://multitasker.alonfabio.com",
  "http://localhost",
  "http://localhost:3000",
  "http://localhost:3001/signin",
  "http://localhost:3001",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback("no-access-allowed", origin); // Add error response.
    }
  },
  methods: ["POST", "GET", "PUT"],
  allowedHeaders: ["Content-Type", "Authentication"],
};

const db = knex({
  // connect to your own database here.
  client: "postgres",
  connection: process.env.POSTGRES_URI || POSTGRES_URI,
});

const app = express();
// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(SSLoptions, app);

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/health-check", cors(corsOptions), (req, res) => {
  res.sendStatus(200);
});
app.post("/signin", signin.signinAuthentication(db, bcrypt));
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
app.get(
  "/profile/:id",
  cors(corsOptions),
  auth.getAuthentication,
  (req, res) => {
    profile.handleProfileGet(req, res, db);
  }
);
app.post(
  "/profile/:id",
  cors(corsOptions),
  auth.getAuthentication,
  (req, res) => {
    profile.handleProfilePost(req, res, db);
  }
);
app.put("/image", cors(corsOptions), auth.getAuthentication, (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageurl", cors(corsOptions), auth.getAuthentication, (req, res) => {
  image.handleApiCall(req, res);
});

// AlonFabio Website

app.get("/gallery/:folder", cors(corsOptions), (req, res) => {
  gallery.getImages(req, res, db);
});

app.post("/gallery/update", cors(corsOptions), (req, res) => {
  gallery.updateImages(req, res, db);
});
app.post(
  "/signin/getUsers",
  cors(corsOptions),
  auth.getAuthentication,
  (req, res) => {
    signin.getUsers(db, res, bcrypt, req);
  }
);

// httpServer.listen(8080, () => {
//   console.log("app is running on port 8080");
// });
// httpsServer.listen(443, () => {
//   console.log("app is running on port 443");
// });
// https.createServer(SSLoptions, app).listen(443, () => {
//   console.log("app is running on port 443");
// });

app.listen(8080, () => {
  console.log("app is running on port 8080");
});
