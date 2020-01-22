
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  // res.send("Abra-Kadabra");
  const num1 = Number(req.body.number1);
  const num2 = Number(req.body.number2);
  const sum = num1 + num2;

  res.send("The sum of " + num1 +" and "+ num2 +" is " + sum);
});

// ************* BMI Calculator ***************

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = Math.round(weight/Math.pow(height, 2));

  res.send("Your BMI is " + bmi);
});


// Start a server and listen on port 3000 for connections

app.listen(3000, function(){
  console.log("The server on port 3000 is running");
});
