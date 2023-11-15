const Project = require("../models/Project");

module.exports.home = async function (req, res) {
  try {
    console.log("inside try and home.ejs");
    let projects = await Project.find({}).sort("-createdAt");
    return res.render("home", {
      title: "Issue Tracker | Home",
      projects,
    });
  } catch {
    console.log("Error", err);
    return;
  }
};
