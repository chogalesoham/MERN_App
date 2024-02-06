const mongoose = require("mongoose");

// create Schema here..

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

// create Model Here...

const User = mongoose.model("User", userSchema);

module.exports = User;
