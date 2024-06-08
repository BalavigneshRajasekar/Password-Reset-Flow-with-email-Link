const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetCode: {
    type: String,
    default: null,
  },
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
