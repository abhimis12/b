const mongoose = require("mongoose");

require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Abhishek:Abhishek@cluster0.fd1m1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
