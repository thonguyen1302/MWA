const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {

});

server.listen(3000);
