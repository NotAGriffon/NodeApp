var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UnityGameData = new Schema({
    screenName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    score:{
        type:Number,
        required:true
    }
});

mongoose.model("players", UnityGameData);