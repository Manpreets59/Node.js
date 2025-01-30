const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url,req.method ,req.headers);
  if(req.url === '/home'){
    res.write('<h1> Welcome to Home </h1>');
    return res.end();
  }else if(req.url === '/men'){
    res.write('<h1> Welcome to men section </h1>');
    return res.end();
  }else if(req.url === '/women'){
    res.write('<h1> Welcome to women section </h1>');
    return res.end();
  }else if(req.url === '/kids'){
    res.write('<h1> Welcome to kids section </h1>');
    return res.end();
  }else if(req.url === '/cart'){
    res.write('<h1> Welcome to cart section </h1>');
    return res.end();
  }

  res.write(`
<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <li><a href="/home">Home</li>
      <li><a href="/men">Men</li>
       <li><a href="/women">Women</li>
      <li><a href="/kids">Kids</li>
      <li><a href="/cart">Cart</li>
    </nav>
  </head>
</body>
</html>
  `);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`)
});


