const signup = require("../models/signup");
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const mailCheck = await signup.findOne({ email: email });
    if (mailCheck) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new signup({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
