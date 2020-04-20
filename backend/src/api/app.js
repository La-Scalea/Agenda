const compression = require("compression");
const express = require("express");
const indexRoute = require("./routes/index");
const userRoute = require("./routes/user");
const eventRoute = require("./routes/event");
const guestRoute = require("./routes/guest");
//const bodyParser = require('body-parser');

const server = express();

server.use(express.json());
//server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const routes = [indexRoute, userRoute, eventRoute, guestRoute];
server.use("/", routes);

server.use(compression());

module.exports = server;
