// Variables
var  express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var crud = require("./routes/crud");

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/", crud);

// Connect to MonoDB via Mongoosse
mongoose.connect("mongodb://localhost:27017/WebAPI",{
}).then(function(){
    console.log("Connected to MongoDB database.");
}).catch(function(err){
    console.log(err);
});

app.use(express.static(__dirname+'/pages'));

// JavaScript for a route
app.get("/", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/index.html"));
});

app.get("/about", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/about.html"));
});

app.get("/contact", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/contact.html"));
});

app.get("/games", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/games.html"));
});

app.get("/update", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/update.html"));
});

app.get("/QueryExample", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/QueryExample.html"));
});

app.listen(3000, function()
{
    console.log("Running on Port 3000");
})