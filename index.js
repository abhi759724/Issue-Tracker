const express = require("express");
const app = express();

// import path
const path = require("path");

// import dotenv
require("dotenv").config();

// import database connection
const db = require("./config/mongoose");

// set ejs layouts
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// set static files path
app.use(express.static(path.join(__dirname, "/public")));

// import routes
app.use("/", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`App is live on Port ${process.env.PORT}`);
});
