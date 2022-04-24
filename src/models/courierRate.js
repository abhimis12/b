const mongoose = require("mongoose");

const courierRateSchema = new mongoose.Schema({
  rate: { type: String, required: true },
  zone: { type: String, required: true },
  first_fivepoint: { type: Number, required: true },
  second_fivepoint: { type: Number, required: true },
});

module.exports = mongoose.model("CourierRate", courierRateSchema);
