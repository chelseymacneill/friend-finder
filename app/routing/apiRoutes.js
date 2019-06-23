// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on each friend and their survey results
// ===============================================================================

let friendsData = require("../data/friendsData")


// Routing 

module.exports = function(app) {
    app.get("/api/friends"), function(req, res) {
        res.json(userData);
    }
    
    // A POST route for /api/freinds that will handle incoming survey results and house compatability logic
    // Create a new friend - takes in JSON input
    
    app.post("/api/friends", function(req, res) { // the friends was just a place holder for right now
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware 
        
        // Where are logical will alert you if you have a match 
        let newFriend = req.body;
        
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.routeName = newFreind.name.replace(/\s+/g, "").toLowerCase();
        
        console.log(newFriend);
        
        friends.push(newFriend);
        
        res.json(newFriend);
        
    })
};


