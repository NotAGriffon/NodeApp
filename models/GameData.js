var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GameData = new Schema({
    gamename:String,
    gamestudio:String
});

mongoose.model("Games", GameData);