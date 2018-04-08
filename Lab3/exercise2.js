/**
 * Created by Sulav on 6/28/17.
 */

let http = require("http");
let fs = require("fs");

// Asynchronous image loading using pipe - Best Way for performance
http.createServer(function (req, res) {
    fs.createReadStream("./exercise2.jpg").pipe(res);
}).listen(4000, '127.0.0.1');


// Synchronous image loading using buffer
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let image = fs.readFileSync(__dirname + '/exercise2.jpg');
    res.end(image);
}).listen(5000, '127.0.0.1');


// Asynchronous image loading using buffer
http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.readFile('./exercise2.jpg', function (err, image) {
        if (err) throw err;
        res.end(image);
    });
}).listen(8000, '127.0.0.1');