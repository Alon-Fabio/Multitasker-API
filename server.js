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
  .ready(httpsWorker);

function httpsWorker(glx) {
  // we need the raw https server
  var server = glx.httpsServer();
  var proxy = require("http-proxy").createProxyServer({ xfwd: true });

  // catches error events during proxying
  proxy.on("error", function (err, req, res) {
    console.error(err);
    res.statusCode = 500;
    res.end();
    return;
  });

  // We'll proxy websockets too
  server.on("upgrade", function (req, socket, head) {
    proxy.ws(req, socket, head, {
      ws: true,
      target: "ws://localhost:8080",
    });
  });

  // servers a node app that proxies requests to a localhost
  glx.serveApp(function (req, res) {
    proxy.web(req, res, {
      target: "http://localhost:8080",
    });
  });
}
