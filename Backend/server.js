const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers/registerControl");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/register", router);
mongoose.connect("mongodb://localhost:27017/Project_resetPassword").then(() => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
