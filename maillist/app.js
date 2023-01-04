const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const { json } = require("body-parser");

const app = express();

app.use(express.static("public")); //specifies static folder for static files
app.use(bodyParser.urlencoded({extended: true})); //enaple app to use bodyparser

//sends home route to signup page upon startup
app.get("/", function (req, res) {

    res.sendFile(__dirname + "/signup.html");

});

app.post("/", function(req, res) {

    //adds user data to JS object
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    //JSON user data
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    
    //parameters for https request jsonData = subscriber info
    const jsonData = JSON.stringify(data);
    //url to post data too
    const url = "https://us21.api.mailchimp.com/3.0/lists/602ee42f52";
    //method and authentication of request
    const options = 
    {
        method: "POST",
        auth: "EstebanDM:ffe4ac862520783d01277c33946aeca0-us21"

    }

    //POST request 
    //places new subscriber to list at mailchimp
    const request = https.request(url, options, function(response) {

        //posts a success page if successful
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        //posts fail page if failed
        else
        {
            res.sendFile(__dirname + "/failure.html");
        }

        //logs parsed JSON data
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

//redirects users to home page 
app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000.");
});

//My mailchimp API key
//ffe4ac862520783d01277c33946aeca0-us21

//list_id
//602ee42f52