// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const connection = require("../config/connection");

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads index.handlebars
  app.get("/", function(req, res) {
      res.render("index", {})
    })

    app.get("/feed", function(req, res) {
      var dbQuery = "SELECT * FROM saved_recipes";

      connection.query(dbQuery, function(err, result) {
        if (err) throw err;
        // res.json(result);
        res.render("feed", {recipe: result})
        console.log(result);
      })
    })
  };