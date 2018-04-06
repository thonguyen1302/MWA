var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname + '/exercise4.js');
var compressed = fs.createWriteStream(__dirname + '/exercise4.js.gz');

readable.pipe(gzip).pipe(compressed);