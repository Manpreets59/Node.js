const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Manpreet123";
const app = express();

const users = [];
app.use(express.json());

function auth (req, res, next){
  const token = req.headers.token;
  const decodeData = jwt.verify(token, JWT_SECRET);

  if(decodeData.username){
    req.username = decodeData.username;
    next()
   }else{
    res.json({
      message: "You are logged in"
    })
   }
}

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", function(req, res){
  const username = req.body.username
  const password = req.body.password
  users.push({
    username: username, 
    password: password
  })
  // we should check if the user with same username already exists 
  res.json({
    message: "You are signed in!"
  })
})

app.post("/signin", function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = users.find(user => user.username === username && user.password === password);
  if(!foundUser){
    res.json({message: "Credentials incorrect"});
    return;
  }else{
    const token = jwt.sign({
      username
    }, JWT_SECRET);
    res.json({
      token: token
    })
  }
})

app.get("/me",auth, function(req, res){
  
    let foundUser = null;
    for(let i = 0; i<users.length;i++){
      if(users[i].username === req.username){
        foundUser = users[i];
      }
    }


    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  
})

app.listen(3000);