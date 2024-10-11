# HTTP module

[HTTP module API](https://nodejs.org/docs/latest/api/http.html).Fundamentals of creating HTTP servers, handling requests, sending responses, and using advanced features.

## Table of Contents

1. **Introduction to the HTTP Module**
2. **HTTP Server and Client**
3. **HTTP Class Methods**
4. **Creating an HTTP Server**
5. **HTTP Message Headers**
6. **Handling HTTP Requests and Responses**
7. **HTTP Client Requests**
8. **Working with HTTP Agents**
9. **Using HTTP Tunneling**
10. **HTTP/2 with Node.js**
11. **Secure HTTP (HTTPS)**
12. **Performance and Optimization**
13. **Practical Examples**
14. **Conclusion**

## 1. **Introduction to the HTTP Module**

The `http` module is a core module in Node.js that provides the functionality needed to build HTTP-based server applications. It supports all standard HTTP operations and works well with other Node.js modules for building scalable web applications.

```js
const http = require("http");
```

## 2. **HTTP Server and Client**

Node.js's HTTP module supports both creating servers and making client requests:

- **HTTP Server**: Handles incoming requests and sends responses.
- **HTTP Client**: Makes requests to external servers.

## 3. **HTTP Class Methods**

The HTTP module provides several classes and methods to facilitate server and client communication:

- `http.createServer()`: Creates an HTTP server.
- `http.request()`: Initiates a request to an external server.
- `http.get()`: A simplified method for making GET requests.
- `http.Server`: The server class that handles incoming connections.
- `http.IncomingMessage`: Represents the data for incoming requests.
- `http.ServerResponse`: Used to build responses.

## 4. **Creating an HTTP Server**

To create a basic server using `http.createServer()`:

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
```

- `req` (IncomingMessage): Contains request data.
- `res` (ServerResponse): Allows sending responses.

## 5. **HTTP Message Headers**

Headers provide metadata about the request or response. To set headers in a response:

```js
res.setHeader("Content-Type", "application/json");
res.setHeader("X-Custom-Header", "MyValue");
```

## 6. **Handling HTTP Requests and Responses**

Requests in HTTP can be handled by checking the request method (`GET`, `POST`, `PUT`, `DELETE`) and the URL. Parsing the request body is often needed when working with POST requests.

```js
if (req.method === "POST" && req.url === "/submit") {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    console.log("Body:", body);
    res.end("Data received");
  });
}
```

## 7. **HTTP Client Requests**

For making requests to external servers, use `http.request()` or `http.get()`:

```js
const options = {
  hostname: "example.com",
  port: 80,
  path: "/path",
  method: "GET",
};

const req = http.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});

req.on("error", (error) => {
  console.error("Error:", error);
});

req.end();
```

## 8. **Working with HTTP Agents**

`http.Agent` controls the creation and reuse of sockets. It manages connection pooling for HTTP requests, improving performance.

- Default settings reuse `TCP connections` for multiple requests.
- You can create a custom agent if you need fine-tuned control over connection behavior.

```js
const agent = new http.Agent({ keepAlive: true });
```

## 9. **Using HTTP Tunneling**

HTTP tunneling is used to create secure connections (like HTTPS). Node.js supports HTTP proxies and tunneling to enable secure data transmission through the `http` and `https` modules.

## 10. **HTTP/2 with Node.js**

Node.js also supports HTTP/2 for improved web performance. The `http2` module is used to implement HTTP/2 protocol:

```js
const http2 = require("http2");
const server = http2.createServer((req, res) => {
  res.end("Hello over HTTP/2");
});
server.listen(8443);
```

## 11. **Secure HTTP (HTTPS)**

For secure communication, use the `https` module, which is a version of the HTTP module that supports SSL/TLS encryption.

```js
const https = require("https");
https
  .createServer({ key, cert }, (req, res) => {
    res.end("Secure connection established");
  })
  .listen(8443);
```

## 12. **Performance and Optimization**

To optimize the HTTP server:

- Use `gzip` or `deflate` compression for faster data transfer.
- Implement caching strategies to reduce server load.
- Utilize streaming to handle large data efficiently.

## 13. **Practical Examples**

**Example: Building a JSON API Server**

```js
const server = http.createServer((req, res) => {
  if (req.url === "/api/data" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, API World!" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});
server.listen(3000, () => {
  console.log("API Server running at http://localhost:3000/");
});
```

## 14. **Conclusion**

The HTTP module in Node.js is a comprehensive solution for creating both HTTP servers and clients. With its built-in support for standard HTTP operations, secure connections, and advanced performance features, it provides everything you need to develop scalable, high-performance network applications. By understanding the core concepts, message handling, and optimization techniques, you can leverage the full potential of the Node.js HTTP module to build robust server-side applications.

Mastering HTTP with Node.js is essential for any developer looking to create scalable web applications, microservices, or APIs. With this knowledge, you'll be well-equipped to handle any HTTP-based task in your web development projects.
