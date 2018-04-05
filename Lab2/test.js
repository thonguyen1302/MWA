fs = require('fs')
fs.readFile('.\Lab2\test.js', 'utf8', function (err,data) {
    setTimeout(() => { console.log('timeout'); }, 0);
    setImmediate(() => {console.log('immediate'); });
    // process.nextTick(() => console.log('nexttick'));
});
