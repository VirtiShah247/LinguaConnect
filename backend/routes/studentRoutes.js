const express = require("express");
const checkAuth = require("../middleware/check-auth");
const { registerStudent } = require("../controllers/studentController");
const studentRoutes = express.Router();

studentRoutes.post("/register", registerStudent);

module.exports = studentRoutes;
