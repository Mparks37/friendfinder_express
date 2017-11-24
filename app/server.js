
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express config

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.  
var PORT = process.env.PORT || 3000;

// BodyParser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =================
// ROUTER
// =================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});