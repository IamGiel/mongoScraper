// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require("path");
var bodyParser = require("body-parser");

//This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");



// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Define port
var port = process.env.PORT || 4000;


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

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/mongoscraper");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
    console.log("Mongoose connection successful.");
});

//router
//Add the application routes
require('./router/router-scraper.js')(app);

//work on MVP
//Scrape data from a website
//display it to the DOM
//create database using MONGODB
//work on saving data to mongodb using button on click
//delete data using button on click




// Listen on port 3000
app.listen(4000, function () {
    console.log("Nice! app is listening on ", port);
});
