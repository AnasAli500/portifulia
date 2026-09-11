const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controller/loginControllers");

// Login route
router.post("/login", loginUser);

// Register route
router.post("/register", registerUser);

module.exports = router;
