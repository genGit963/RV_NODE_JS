# HTTPS module:

More info: https://nodejs.org/docs/latest/api/https.html

### 1. **Determining if Crypto Support is Unavailable**

- This feature checks if cryptographic support is present. Since HTTPS relies on encryption, it's essential to confirm that the Node.js runtime includes crypto support. If it's unavailable, Node.js can't perform the necessary encryption for secure connections.

### 2. **Class: `https.Agent`**

- An `https.Agent` manages connection persistence and reuse for HTTPS requests. It maintains a pool of sockets to handle multiple requests efficiently. It can be used to control the behavior of connections for performance tuning.

#### Example:

```javascript
const https = require("https");

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: 5,
});
```

- **Event: `keylog`**: This event is triggered whenever the TLS session keys are generated, which can be used for debugging encrypted connections. For security reasons, it's used with caution in production environments.

### 3. **Class: `https.Server`**

- This class is used to create an HTTPS server, similar to the HTTP server, but with SSL/TLS encryption.

#### Methods:

- **`server.close([callback])`**: Closes the server and optionally triggers a callback function once all connections are closed.

  ```javascript
  server.close(() => {
    console.log("Server closed");
  });
  ```

- **`server[Symbol.asyncDispose]()`**: Handles the cleanup of resources asynchronously when the server object is disposed of.

- **`server.closeAllConnections()`**: Immediately terminates all open connections to the server.

- **`server.closeIdleConnections()`**: Closes all idle connections, freeing up resources.

- **`server.headersTimeout`**: The amount of time the server waits for incoming headers (default is 60000 milliseconds).

- **`server.listen()`**: Starts the server to listen for incoming requests.

  ```javascript
  server.listen(443, () => {
    console.log("Server is listening on port 443");
  });
  ```

- **`server.maxHeadersCount`**: Limits the number of headers the server accepts per request to prevent denial-of-service attacks.

- **`server.requestTimeout`**: Specifies how long the server waits for an incoming request before timing out.

- **`server.setTimeout([msecs][, callback])`**: Sets a timeout period for the server connections, with an optional callback function for handling timeout events.

- **`server.timeout`**: The default timeout for incoming requests (default is 120000 milliseconds).

- **`server.keepAliveTimeout`**: Specifies how long the server waits to receive the next request before closing the connection.

### 4. **HTTPS Functions**

- These functions are used to create secure HTTP requests.

#### Methods:

- **`https.createServer([options][, requestListener])`**: Creates an HTTPS server with specified SSL/TLS options and a request listener.

  ```javascript
  const https = require("https");
  const fs = require("fs");

  const options = {
    key: fs.readFileSync("server-key.pem"),
    cert: fs.readFileSync("server-cert.pem"),
  };

  const server = https
    .createServer(options, (req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(443);
  ```

- **`https.get(options[, callback])`**: Sends a GET request to a server with specified options.

  ```javascript
  https.get("https://example.com", (res) => {
    console.log("Status Code:", res.statusCode);
  });
  ```

- **`https.get(url[, options][, callback])`**: Allows specifying a URL and additional options for the GET request.

- **`https.globalAgent`**: The default global `Agent` that HTTPS requests use if no other agent is specified.

- **`https.request(options[, callback])`**: Sends an HTTPS request, allowing more control over the request compared to `https.get`.

  ```javascript
  const options = {
    hostname: "example.com",
    port: 443,
    path: "/",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
  });

  req.end();
  ```

- **`https.request(url[, options][, callback])`**: Sends a request with a specified URL, options, and callback.

### Explanation Summary

The HTTPS module in Node.js provides the necessary tools to implement secure data transfer over the web by using SSL/TLS encryption. It offers various classes and methods, like `https.Agent` and `https.Server`, for managing secure connections, handling request timeouts, and reusing connections efficiently. These features make it possible to build robust, secure applications in Node.js.
