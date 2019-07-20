const express = require("express");
const app = express();
const logger = require("morgan");

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;
