// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various handlebar pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Using handlebars, each of the below routes handles the page that the user gets sent to.

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });

  // profile route for profile.handlebars
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/profile.handlebars"));
  });

  //login page route for login.handlebars
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.handlebars"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};