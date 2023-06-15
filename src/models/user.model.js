const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    match: /^.*@.*\..*$/, //regex -> patron
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("User", userSchema, "Users");