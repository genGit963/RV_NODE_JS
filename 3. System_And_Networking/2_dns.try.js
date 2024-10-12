const dns = require("dns");

dns.lookup("bogatimahesh.com.np", (err, address, family) => {
  if (err) {
    console.log(err);
  }
  console.log(`Address: ${address}, Family: IPv${family}`);
});
