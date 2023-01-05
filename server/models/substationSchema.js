const mongoose = require("mongoose");

const substationSchema = new mongoose.Schema({
  subDivisionId: {
    type: Number,
    required: true,
  },
  subStationId: {
    type: Number,
    required: true,
  },
  subStation_name: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const substation = new mongoose.model("substation", substationSchema);

module.exports = substation;
