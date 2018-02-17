// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require("path");
//This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Define port
var port = process.env.PORT || 3000;


// Initialize Express
var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "/views/layouts/partials")
}));
app.set("view engine", "handlebars");

// MongoDB
mongoose.Promise = Promise;
// MONGOLAB_ONYX_URI = mongodb://heroku_6bn2xz2b:''@ds117336.mlab.com:17336/heroku_6bn2xz2b
var MONGODB_URI = process.env.MONGOLAB_ONYX_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, {
   
});

//work on MVP
//Scrape data from a website
//display it to the DOM
//create database using MONGODB
//work on saving data to mongodb using button on click
//delete data using button on click




// Listen on port 3000
app.listen(3000, function () {
    console.log("App running on port 3000!");
});
