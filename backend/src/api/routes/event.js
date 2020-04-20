"use strict";

const express = require("express");
const eventController = require("../controllers/event");

const router = express.Router();

//Event API Router
router.get("/event", eventController.eventReadAllByUser);
router.get("/event/:id", eventController.eventReadById);
router.post("/event", eventController.eventCreate);
router.put("/event/:id", eventController.eventUpdate);
router.delete("/event/:id", eventController.eventDelete);

module.exports = router;
