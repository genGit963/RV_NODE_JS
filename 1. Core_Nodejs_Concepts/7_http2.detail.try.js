const http2 = require("http2");

// Create an HTTP/2 server
const server = http2.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Hello, HTTP/2 World!");
});

server.listen(8080, () => {
  console.log("HTTP/2 server is running at http://localhost:8080");
});
