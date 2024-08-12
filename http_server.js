var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('240812 10:35 CI/CD is work\n');
}).listen(3000, "0.0.0.0");
console.log('Server running at your public IP:3000');
