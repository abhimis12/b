const express = require("express");
const Pincode = require("../models/pincode-model.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const newPincode = new Pincode({
    zone: req.body.zone,
    pincode: req.body.pincode,
  });
  try {
    const savedPincode = await newPincode.save();
    res.status(201).json(savedPincode);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
