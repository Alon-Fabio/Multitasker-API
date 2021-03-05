"use strict";

var app = require("./app.js");

require("greenlock-express")
  .init({
    packageRoot: __dirname,
    configDir: "./greenlock.d",

    maintainerEmail: "alon.the.fabio@gmail.com",

    // whether or not to run at cloudscale
    cluster: false,
  })
  // Serves on 80 and 443
  .serve(app);
