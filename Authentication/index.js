const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const users = [];

app.post("/signup", function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  users.push({username, password});
  // we should check if the user with same username already exists 
  res.json({message: "You are signed in!"});

})

app.post("/signin", function(req, res){

})

app.get("/me", function(req, res){

})

const port(3000);