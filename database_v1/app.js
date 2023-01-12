//jshint esversion:6

//require packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

//sets application to use express module
const app = express();

//set app to use ejs
app.set('view engine', 'ejs');

//enables app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//create and connect to new database
mongoose.connect("mongodb://localhost:27017/database_v1", {useNewUrlParser: true});

app.get("/", function(req, res){
    
    let day = new Date();
   
    //finds all items in our database
    // Item.find({}, function(err, foundItems){
    //     if(err){
    //         console.log(err);
    //     }
    //     else
    //     {
          
    //     }
    // });  

     //.render() is the ejs method for sending a web page
     res.render('database', {listTitle: day});
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
})