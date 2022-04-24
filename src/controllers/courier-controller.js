const express = require("express");
const Courier = require("../models/courierRate.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const newCourier = new Courier({
    rate: req.body.rate,
    zone: req.body.zone,
    first_fivepoint: req.body.first_fivepoint,
    second_fivepoint: req.body.second_fivepoint,
  });
  try {
    const savedCourier = await newCourier.save();
    res.status(201).json(savedCourier);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
