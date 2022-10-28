const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Welcome home page");
});

app.get("/contact", function(req, res){
    res.send("contact me");
});

app.get("/about", function(req, res){
    res.send("software developer learning to program");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>coding</li><li>design</li><li>engineering</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

