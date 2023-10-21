const express = require("express");
// const router = express.Router();
const { Router } = require("express");
const auth = Router();
const authController = require("../controllers/authController");

auth.post("/register", authController.register);
auth.post("/login", authController.login);
auth.get("/", authController.test);
// router.post('/register', authController.register);
// router.post('/login', authController.login);

module.exports = auth;
