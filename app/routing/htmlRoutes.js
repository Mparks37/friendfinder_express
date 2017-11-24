var path = require("path");

// Setting routes

module.exports = function(app) {

  // HTML GET Requests
  
  // Route to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Default to home page if route doesn't match
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
