const http = require('http');
const port = process.env.PORT || 8080;

const requestListener = function (req, res) {
res.writeHead(200);
res.end('Testowanie jest super SUPER!');
}

cons server = http.createServer(requestListener);
serve.listen(port);