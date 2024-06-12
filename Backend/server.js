const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const router = require("./routers/registerControl");
const resetRouter = require("./routers/resetLink.js");
const resetPassword = require("./routers/resetPassword.js");
const loginRouter = require("./routers/loginControl.js");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use("/register", router);
app.use("/registered/user", loginRouter);
app.use("/api1", resetRouter);

app.use("/api", resetPassword);
mongoose.connect(process.env.MONGODB).then(() => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
