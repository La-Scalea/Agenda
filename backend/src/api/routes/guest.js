"use strict";

const express = require("express");
const controller = require("../controllers/guest");

const router = express.Router();

//Guest API Router
router.get("/event/:idEvent/guest", controller.guestReadAllInEvent);
router.post("/event/:idEvent/guest", controller.guestCreateInEvent);
router.put("/event/:idEvent/guest/:idGuest", controller.guestUpdateInEvent);
router.delete("/event/:idEvent/guest/:idGuest", controller.guestDeleteInEvent);

module.exports = router;
