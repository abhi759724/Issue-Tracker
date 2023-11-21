const express = require("express");
const app = express();
// import dotenv
require("dotenv").config();
// import database connection
const db = require("./config/mongoose");
// import path
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// set ejs layouts
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

// set static files path
app.use(express.static("assets"));

// import routes
app.use("/", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`App is live on Port ${process.env.PORT}`);
});
