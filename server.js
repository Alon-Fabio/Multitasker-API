"use strict";

const express = require("express");
const https = require("https");
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
const gallery = require("./controllers/gallery");

const { POSTGRES_URI } = require("./secret");

const whitelist = [
  "https://www.alonfabio.com",
  "https://multitasker.alonfabio.com",
  "http://multitasker.alonfabio.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS " + origin));
    }
  },
};

const db = knex({
  // connect to your own database here.
  client: "postgres",
  connection: process.env.POSTGRES_URI || POSTGRES_URI,
});

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/health-check", (req, res) => {
  res.sendStatus(200);
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

// AlonFabio Website

app.get("/gallery/:folder", (req, res) => {
  gallery.getImages(req, res, db);
});

app.post("/gallery/update", (req, res) => {
  gallery.updateImages(req, res, db);
});

app.listen(8080, () => {
  console.log("app is running on port 8080");
});
