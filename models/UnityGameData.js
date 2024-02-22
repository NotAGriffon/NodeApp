var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UnityGameData = new Schema({
    level:{
        type:Number,
        required:true
    },
    timeElapsed:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

mongoose.model("unitygames", UnityGameData);