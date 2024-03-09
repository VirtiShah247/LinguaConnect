const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const studentRoutes = require("./routes/studentRoutes");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: false }));

app.use("/api/student", studentRoutes);

app.use((req, res, next) => {
  return next(new Error("Could Not Find the Route"));
});

app.listen(port, () => {
  console.log("Server started on 5000");
});

module.exports = app;
