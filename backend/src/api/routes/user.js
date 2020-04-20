"use strict";

const express = require("express");
const userController = require("../controllers/user");
const authenticateMiddleare = require("../security/middlewares/authenticate");
const authenticate = require('../services/authenticate')
const validator = require('../security/validators/user.validate')

const router = express.Router();

//Route to register
router.post("/user/join", validator.validateJoin, userController.userCreate);
//Router to login
router.post("/user/login", validator.validateLogin, userController.userAuthenticate);

//Apena para teste
router.get("/user", userController.userReadAll);
router.get("/user/:id", userController.userReadById);

//router.use(authenticateMiddleare);

//User API Router
//router.get('/user/:id', userController.userReadById);
router.put("/user/:id", authenticate.authenticate, userController.userUpdate);
router.delete("/user/:id", authenticate.authenticate, userController.userDelete);

module.exports = router;
