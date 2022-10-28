const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); //allows parsing of post request data

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    const location = req.body.cityName;
    const apiKey = "92d52331b861b3a17c828919a2955831";
    const units = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=" + units;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<h1>weather description: " + weatherDescription +"</h1>");
            res.write("<h1>Temperature: " + temp + "F</h1>");
            res.write("<img src=" + icon +"></img>");
            res.send();
        });
        
    })

    
});



app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})