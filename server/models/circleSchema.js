const mongoose = require("mongoose");

const circleSchema = new mongoose.Schema({
  circleId: {
    type: String,
    required: true,
  },
  circlename: {
    type: String,
    require: true,
  },
});

const Circle = new mongoose.model("Circle", circleSchema);

module.exports = Circle;
