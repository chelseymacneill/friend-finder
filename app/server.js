// Require the needed packages 
let express = require("express");
let path = require("path");
let fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Starts our server 
app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



