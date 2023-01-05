const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  subDivision: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  postingLocation: {
    type: String,
    required: true,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
