const mongoose =require("mongoose")
const { type } = require("os")
const schema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },
    age:{
        type:Number,
    },
   
});
const Person =mongoose.model("person", schema);
module.exports =Person;