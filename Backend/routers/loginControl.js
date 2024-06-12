const signup = require("../models/signup");
const express = require("express");
const bcrypt = require("bcrypt");

const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const verifyUser = await signup.findOne({ email: email });
    if (!verifyUser) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    const verifyPassword = await bcrypt.compare(password, verifyUser.password);
    if (!verifyPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    res.status(200).json({ message: "Login Success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = loginRouter;
