const mongoose = require("mongoose");
// import dotenv
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

//If any Error then Getting this Line
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database :: MongoDB ");
});

module.exports = db; //Exports db
