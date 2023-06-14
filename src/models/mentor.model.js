const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number
    },
    generations : [
      {
        name: String, // 25Js
        isActive: Boolean // true o false
      }
    ]
})

module.exports = mongoose.model("mentors", mentorSchema, "Mentors");