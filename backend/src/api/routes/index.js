"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "API Calendar using Express + Sequelize in Node.js is runing",
    version: "0.0.1",
  });
});

module.exports = router;
