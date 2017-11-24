// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require("../data/friends");

// Setting routes

module.exports = function(app) {
  // API GET Requests
  
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  
  
  app.post("/api/friends", function(req, res) {
    
    // Best match object.
    
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

   
    var userData = req.body;
    
    var userScores = userData.scores;

    // Calculate the variance between the user's input and totals in the database
     
    var totalDifference;

     
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      // For loop to go through all scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    
    friends.push(userData);

    // JSON with the user's bestMatch.  
    res.json(bestMatch);
  });
};
