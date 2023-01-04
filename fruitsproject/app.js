//jshint esversion:6

//require mongoose
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

//connect to database
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

//create new mongoose schema
const fruitSchema = new mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    rating:{ 
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//create a new collection in mongoose with specified schema
const Fruit = mongoose.model("Fruit", fruitSchema);

//create a new documents
const fruit = new Fruit({
    name: "IDK",
    rating: 1,
    review: "What a profoundly absent fruit"
});

const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Love em"
});

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "The literal best"
});

/////////////// ADDING DOCUMENTS /////////////////

//inserts multiple fruit documents
// Fruit.insertMany([banana, mango], function(err){
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Fruits succesfully added");
//     }
// });

//saves fruit document to the Fruit collection in fruitsDB database
// fruit.save();

//////////////////////////////////////////////////

//deletes document with given _id
Fruit.deleteOne({_id: "63af64037448e6a78d9d68c0"}, function(err)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("Fruit successfully deleted");
    }
});

//goes through the Fruit collection and returns an array of documents
//as JSON objects
Fruit.find(function(err, fruits){
    if (err)
    {
        console.log(err);
    } 
    else
    {
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

//build schema for person documents
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

//creates a collection of persons to match personSchema
const Person = mongoose.model("Person", personSchema);

//creates a new person document
const person = new Person({
    name: "Esteban",
    age: 28,
    favoriteFruit: mango
});

Person.updateOne({name: "John"}, {favoriteFruit: banana}, function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("John updated favroite fruit to banana");
    }
});

//adds new Person document to collection
// person.save();




