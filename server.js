// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");

 
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 

app.post("/", function(req, res) {
  connection.query("INSERT INTO searched (wordsSearched) VALUES (?)", [req.body.recipeSearched], function(err, result) {
    if (err) throw err;
    console.log(recipeSearched);
    res.redirect("/");
  });
});
