const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    // res.send("<h1>Calculator</h1>");
    res.sendFile(__dirname + "\\bmicalculator.html");
});

//handles post requests by parsing page information and handling it
app.post('/', function(req, res){

    console.log(req.body);
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = (weight/(height ** 2)) * 703;
    res.send("Your BMI is: " + result);
});

//listens for operations performed on port 3000
app.listen(3000, function(){
    console.log("Calculator started on port 3000");
});