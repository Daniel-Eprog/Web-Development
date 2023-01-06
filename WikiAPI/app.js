//jshint esversion:6

//require packages
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

//set app to use express module
const app = express();

//enables use of body-parser
app.use(bodyPaser.urlencoded({extended: true}));
app.use(express.static("public"));

//connect to mongoDB database
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

//mongoose schema
const articleSchema = {
    title: String,
    content: String
}

//create mongoose model
const Article = mongoose.model("Article", articleSchema);

//response when user tries to access home route
app.get("/", function(req, res){
    
    Article.find({}, function(err, foundList){
        res.send(foundList);
        foundList.forEach(function(article){
            console.log(article.title);
            console.log(article.content);
        });
    });
   
    
});

//performs post request to home route
app.post("/", function(req, res){

  
        Article.findOne({title: "CSS"}, function(err, foundList){
            console.log(foundList.title);
            console.log(foundList.content);
        });
    
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
})


