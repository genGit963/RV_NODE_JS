`http` module in Node.js,
specifically covering different classes and methods used to handle HTTP requests and responses

More info: https://nodejs.org/docs/latest/api/http.html

## 1. Class: `http.Agent`

`http.Agent` manages the connection pooling for HTTP clients. It's responsible for managing sockets used for HTTP requests to optimize connection reuse and improve performance.

### Methods:

- **`new Agent([options])`**: Creates a new instance of `http.Agent`. You can pass options like `keepAlive`, `maxSockets`, etc.

  ```javascript
  const http = require("http");
  const agent = new http.Agent({ keepAlive: true, maxSockets: 10 });
  ```

- **`agent.createConnection(options[, callback])`**: Creates a new socket connection.
- **`agent.keepSocketAlive(socket)`**: Determines if a socket should be kept alive.
- **`agent.reuseSocket(socket, request)`**: Reuses an existing socket for the next request.
- **`agent.destroy()`**: Destroys all active connections managed by the agent.

### Properties:

- **`agent.freeSockets`**: Contains free sockets that are ready to be reused.
- **`agent.getName([options])`**: Gets a unique name for the connection based on the options.
- **`agent.maxFreeSockets`**: Maximum number of free sockets to keep.
- **`agent.maxSockets`**: Maximum number of sockets to allow per host.
- **`agent.requests`**: Queued requests waiting for socket availability.
- **`agent.sockets`**: Contains currently active sockets.

## 2. Class: `http.ClientRequest`

Handles outgoing HTTP requests in Node.js, created by the `http.request()` method.

### Events:

- **`abort`**, **`close`**, **`connect`**, **`continue`**, **`finish`**, **`information`**, **`response`**, **`socket`**, **`timeout`**, **`upgrade`**: Various events fired during the lifecycle of an HTTP request.

### Methods:

- **`request.abort()`**: Aborts the request.
- **`request.end([data[, encoding]][, callback])`**: Signals that no more data will be written to the request.

  ```javascript
  const req = http.request(options, (res) => {
    res.on("data", (chunk) => {
      console.log(chunk);
    });
  });
  req.end(); // Ending the request
  ```

## 3. Class: `http.Server`

Represents the HTTP server which listens for incoming requests.

### Events:

- **`request`**, **`connection`**, **`close`**, **`connect`**, **`upgrade`**: These events handle different aspects of server-client interactions.

### Methods:

- **`server.listen()`**: Starts the HTTP server to listen to incoming connections.
- **`server.close([callback])`**: Stops the server from accepting new connections.

  ```javascript
  const http = require("http");
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Hello World");
  });

  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
  ```

## 4. Class: `http.ServerResponse`

Represents the response to be sent to the client from the server.

### Methods:

- **`response.writeHead(statusCode[, statusMessage][, headers])`**: Sets the HTTP status code and headers.
- **`response.end([data[, encoding]][, callback])`**: Signals the end of the response.

  ```javascript
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Response ended successfully");
  });
  ```

## 5. Class: `http.IncomingMessage`

Represents an incoming HTTP request to the server.

### Properties:

- **`message.headers`**, **`message.method`**, **`message.url`**, **`message.socket`**: Provides access to request details such as headers, HTTP method, URL, and the associated socket.

  ```javascript
  const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    res.end();
  });
  ```

## 6. Class: `http.OutgoingMessage`

Base class for `http.ClientRequest` and `http.ServerResponse`, used to handle outgoing messages.

### Methods:

- **`outgoingMessage.setHeader(name, value)`**: Sets the value of an HTTP header.
- **`outgoingMessage.end()`**: Ends the outgoing message.

  ```javascript
  const http = require("http");
  const options = {
    hostname: "example.com",
    port: 80,
    path: "/",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
  });

  req.end();
  ```

## Utility Methods

- **`http.METHODS`**: Array of supported HTTP methods.
- **`http.STATUS_CODES`**: Object containing standard HTTP status codes and their descriptions.

## Example Code: Creating a Basic HTTP Server and Client

Here's a complete example that demonstrates creating an HTTP server and making a request using the HTTP client.

### Server Example:

```javascript
const http = require("http");

// Creating an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!\n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
```

### Client Example:

```javascript
const http = require("http");

// Making a GET request to the server
http
  .get("http://127.0.0.1:3000", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(`Server response: ${data}`);
    });
  })
  .on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
```
