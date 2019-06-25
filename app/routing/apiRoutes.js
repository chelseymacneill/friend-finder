// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on each friend and their survey results
// ===============================================================================

let friendsAPI = require("../data/friendsData")

// Routing 
module.exports = function(app) {
    //grabs data friends array from the friendsData.js file
    app.get("/api/friends", function(req, res) {
        
        // Holds 
        res.json(friendsAPI);
        
        // Inspect freindsAPI
        //console.log(friendsAPI)
    });
    
    // A POST route for /api/freinds that will handle incoming survey results and house compatability logic
    // Create a new friend - takes in JSON input
    
    
    app.post("/api/friends", function(req, res) { 

        const newUser = req.body;
        const bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        }
        let totalDiff;

        for(var i = 0; i < friendsAPI.length; i++){
            let currentFriend = friendsAPI[i];
            totalDiff = 0;

            for(var j = 0; j < currentFriend.scores.length; j++){
                let currentFriendScore = currentFriend.scores[j];
                let currentUserScore = newUser.scores[j];

                totalDiff += Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore))
            }

            if(totalDiff < bestMatch.friendDiff){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = totalDiff
            }
        }
        friendsAPI.push(newUser);
        res.json(bestMatch)

    //     let finalMatch;

    //     // Create var for new User
    //     const newUser = req.body;
        
    //     // Declare y which hold the sum of the diffrences of the array of answers between 2 users 
    //     let y = 0;
        
    //     // An empty array to hold score comparisons
    //     let comparisonArray = [];
        
    //     for (var j = 0; j < friendsAPI.length; j ++) {
            
    //         // Empty out y to start from zero
    //         y = 0 
            
    //         for (var i = 0; i < 10; i ++) {
    //             let x = Math.abs(newUser.scores[i] - friendsAPI[j].scores[i])
    //             y += x
                
    //             // Inspect x 
    //             console.log(x)
    //         };

    //         // Print out what y is holding
    //         // console.log(y);
    //         // Push y to the comparison array
    //         comparisonArray.push(y)
            
    //         // Inspect what the comparison Array is holding
    //         // console.log(comparisonArray)

    //         // Holds the minimum of the comparisons of the score arrays for each user
    //         let minComparison = Math.min(...comparisonArray)

    //         // Inspect min Comparison
    //         // console.log(minComparison) 
            
    //         // Gives the index of the match we should grab from our friendsAPI object
    //         let matchIndex = comparisonArray.indexOf(minComparison)
            
    //         // Inspect the match Index
    //         // console.log(matchIndex)
            
    //         // final match 
    //         finalMatch = friendsAPI[matchIndex]; // removed the +1 for testing 
            
    //         // Inspect the final Match 
    //         // console.log(finalMatch)
            
    //     }
        
    //     // this pushes user survey data to freindsData 
    //     // req.body holds the information on the current user who filled out the survey
    //     friendsAPI.push(req.body);

    //     // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    //    res.json(finalMatch);
    });
};



