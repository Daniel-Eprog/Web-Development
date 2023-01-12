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

//chained route handler for /articles route
//chaining allows you to put all requests as part of an extension of the .route()
app.route("/articles")
.get(function(req, res){
    //finds Articles collection
    Article.find({}, function(err, foundList){
        //sends the Articles collection as a JSON
        if(!err)
        {
        res.send(foundList);
        foundList.forEach(function(article){
            //logs each indndividual document in the articles collection
            console.log(article.title);
            console.log(article.content);
        });
        } else {
            res.send(err);
        }
    }); 
})
.post(function(req, res){
    
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if(err){
            res.send(err);
        } else {
            res.send("New document added.");
        }
    });
    
})
.delete(function(req, res){

    Article.deleteMany({ }, function(err){
        if(err){
            res.send(err);
        } else {
            res.send("All documents deleted.");
        }
    })

});

app.route("/articles/:articleTitle")
.get(function(req, res){
    Article.findOne({title: req.params.articleTitle}, function(err, result){
        if(result){
            res.send(result);
        } else {
            res.send("Sorry, no article of name " + req.params.articleTitle);
        }
    });
})
.put(function(req, res){
    Article.updateOne({title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        function(err){
            if(err){
                res.send("Could not update database")
            } else {
                res.send("Database updated entry with name: " + req.params.articleTitle);
            };
        });
})

.delete(function(req, res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
            if(!err){
                res.send("Article " + req.params.articleTitle + " successfully deleted.");
            } else {
                res.send("Sorry could not delete article " + req.params.articleTitle + ".");
            }
        });
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
})


