const express = require("express");
const courier_controller = require("./controllers/courier-controller");
const pincode_controller = require("./controllers/pincode-controller");
const app = express();
app.use(express.json());

app.use("/", courier_controller);
app.use("/", pincode_controller);

module.exports = app;
