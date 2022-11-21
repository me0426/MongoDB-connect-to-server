//const { Console } = require("console");
const express = require("express");
const mongoose= require("mongoose");
const app =express();
const personroute = require("./route")
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/seminarlearn")
.then(function(){
    console.log("connected to the database");
})
.catch((err)=>
    console.log("error",err)
);
app.use("/person", personroute);


app.listen(3000, ()=>{
    console.log("port on 3000");
});