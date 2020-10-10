// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads homepage.html
  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // cms route loads feed.html
  app.get("/feed", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/feed.html"));
  });

  // blog route loads nailedit.html
  app.get("/nailedit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/nailedit.html"));
  });

};