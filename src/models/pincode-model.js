const mongoose = require("mongoose");

const pincodeSchema = new mongoose.Schema({
    zone:{type:String, required: true},
    pincode:{type:Number, required: true},
})

module.exports = mongoose.model("Pincode",pincodeSchema)