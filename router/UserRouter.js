const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const user = require("../model/user");
router.post("/register", userController.NewUser);

module.exports = router;
