//jshint esversion:6

//require packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const _ = require("lodash");

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

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

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

//express route parameter
app.get("/:listName", function(req, res){

    const listName = _.capitalize(req.params.listName);

    //looks for for list Names placed in search bar
    List.findOne({name: listName}, function(err, foundList){
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(!foundList)
            {
                //creates new list if list doesn't exist
                const list = new List({
                    name: listName,
                    items: defaultItems
                }); 

                list.save();
                res.redirect("/" + listName);
            }
            else{
            res.render("list", {listTitle: foundList.name, newItems: foundList.items});
            }
        }
    })

    

});

//performs post request to home route
app.post("/", function(req, res){

    //creates new document with string in body itemAdd in ejs file
    const addItem = new Item({
        name: req.body.itemAdd
    });

    if(req.body.list === date.getDate())
    {
         //adds document to collection
        addItem.save();
        //redirects to to home route
        res.redirect("/");
    }
    else
    {
        List.findOne({name: req.body.list}, function(err, foundList){
            foundList.items.push(addItem);
            foundList.save();
        });
        res.redirect("/" + req.body.list);
    }
    
});

app.post("/delete", function(req, res){

    if(req.body.listName === date.getDate())
    {
    Item.findByIdAndRemove(req.body.removeItem, function(err){
        if(err)
        {
            console.log(err);
        }
    });
    res.redirect("/");
    }
    else
    {
        List.findOneAndUpdate({name: req.body.listName}, {$pull: {items: {_id: req.body.removeItem}}}, function(err, foundList){
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.redirect("/" + req.body.listName);
            }
        });
    }
    
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
})
