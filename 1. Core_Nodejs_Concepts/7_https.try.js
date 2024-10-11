const https = require("https");

https
  .createServer({ key, cert }, (req, res) => {
    res.end("Secure Conncection established !!");
  })
  .listen(8443, () => console.log("server on :", 8443));
