const http = require('http');
const fs = require('fs');

// function requestLisner(req, res){
//   console.log(req);
// }
//http.createServer(requestLisner);

// http.createServer(function(req, res){
//   console.log(req);
// });

const server = http.createServer((req, res) => {
  if(req.url === '/'){
  console.log(req.url,req.method ,req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>Enter Your Details </h1>');
  res.write('<form action="/submit-details" method="POST">')
  res.write('<form>');
  res.write('<input type="text" name="username" placeholder="Enter your Name"><br>');
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id="male" name="gender" value="male" />')
  res.write('<label for="female">Female</label>')
  res.write('<input type="radio" id="female" name="gender" value="female" />')
  res.write('<br><input type="submit" value="submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();

  }else if(req.url.toLowerCase === "/submit-details" && req.method == "POST"){
    fs.writeFileSync('user.tst','Manpreet Singh');
    res.statusCode = 302;
    res.setHeader('Location','/');
  }
  else if(req.url === '/products'){
    console.log(req.url,req.method ,req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding </title></head>');
    res.write('<body></h1>Checkout our products </h1></body>');
    res.write('</html>');
    return res.end();
  }

  console.log(req.url,req.method ,req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body></h1>Welcome to my drive</h1></body>');
  res.write('</html>');
   res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`)
});