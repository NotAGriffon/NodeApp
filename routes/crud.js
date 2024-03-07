var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var dataToSend;

// Sets up route to Database Schema
require("../models/GameData")
require("../models/UnityGameData")
var gameModel = mongoose.model("Games");
// var UnityModel = mongoose.model("unitygames");
var UnityModel = mongoose.model("players");

// All CRUD operations
// Get Data
router.get("/getdata", function(req,res){
    gameModel.find({}).then(function(games){
        res.json({games});
    }).catch(function(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"})
    })
});

// Delete
router.post("/deletegame", function(req, res){
    console.log(req.body.game._id);
    gameModel.findByIdAndDelete(req.body.game._id).exec();
    res.redirect("games.html");
})

// Update
router.post("/updategame", function(req, res)
{
    console.log(req.body);
    gameModel.findByIdAndUpdate(req.body.id,{gamename:req.body.game}).then(function(){
        res.redirect("games.html");
    });
})

// Save
router.post("/saveGame", function(req, res)
{
    console.log(req.body);

    // Saves Data in Database
    new gameModel(req.body).save().then(function(){
        res.redirect("games.html");
    });
})

// SEARCH & SORT
// Search
router.get("/getdata", function(req, res) {
    var searchQuery = req.query.search ? { gamename: req.query.search } : {};

    gameModel.find(searchQuery).then(function(games) {
        res.json({ games });
    }).catch(function(err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    });
});

// Sort
router.get("/getdata", function(req, res) {
    gameModel.sort({ gamename: 1 }).then(function(games) {
        res.json({ games });
    }).catch(function(err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    });
});

// Unity Data
router.post("/unity", function(req, res){
    console.log("Unity Posted Data");
    console.log(req.body);

    // Saves Data in Database
    new UnityModel(req.body).save().then(function(){
        dataToSend = req.body;
        console.log(req.body);
    });
})

router.get("/getUnity", function(req, res){
    console.log(dataToSend);

    UnityModel.find({}).then(function(playerdata){
        console.log(playerdata)
        res.json({playerdata});
    }).catch(function(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"})
    })
});

// Update
router.post("/updateUnity", function(req, res)
{
    console.log(req.body._id);
    UnityModel.findByIdAndUpdate(req.body._id,{screenName:req.body.screenName, firstName:req.body.firstName, lastName:req.body.lastName, date:req.body.date, score:req.body.score}).then(function(){});
})

// Delete
router.post("/deleteUnity", function(req, res){
    console.log(req.body._id);
    UnityModel.findByIdAndDelete(req.body._id).exec();
})

module.exports = router;