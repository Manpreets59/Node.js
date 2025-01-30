const http = require('http');

// function requestLisner(req, res){
//   console.log(req);
// }
//http.createServer(requestLisner);

// http.createServer(function(req, res){
//   console.log(req);
// });

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`)
});