//jshint esversion:6

//require packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

//sets application to use express module
const app = express();

//sets app to use ejs
app.set('view engine', 'ejs');

//enables app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//create a new data base
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true}); 

//create new mongoose schema
const itemsSchema = {
    name: String
};

//create new mongoose model
const Item = mongoose.model("Item", itemsSchema);

//create document using model
const takeTrash = new Item(
    {
        name: "Take out the trash."
    });

const feedDog = new Item({
    name: "Feed the dogs."
});

const study = new Item({
    name: "Study web development."
});

const defaultItems = [takeTrash, feedDog, study];

//insert documents into collection
// Item.insertMany(defaultItems, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("items succesfully added.");
//     }
// });

//response when user tries to access home route
app.get("/", function(req, res){
    
    let day = date.getDate();

    //finds all items in our database
    Item.find({}, function(err, foundItems){
        if(err){
            console.log(err);
        }
        else
        {
           //.render() is the ejs method for sending a web page
           res.render('list', {listTitle: day, newItems: foundItems});
        }
    });

    
    
});

//performs post request to home route
app.post("/", function(req, res){

    //creates new document with string in body itemAdd in ejs file
    const addItem = new Item({
        name: req.body.itemAdd
    });

    //adds document to collection
    addItem.save();

    //redirects to appropriate page
    if(req.body.list === "Work")
    {
        res.redirect("/work");
    }
    else
    { 
        res.redirect("/");

    }
    

    
});

app.get("/work", function(req, res)
{
    res.render('list', {listTitle: "Work List", newItems: workItems});
});

app.post("/work", function(req, res){
    var addItem = req.body.itemAdd;

    workItems.push(addItem);

    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
})
