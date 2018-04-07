/**
 * Created by Sulav on 6/29/17.
 */

const http = require("http");
const fs = require("fs");
const url = require('url');
const {fork} = require('child_process');


http.createServer((req, res) => {
    updatePage(req, res);

}).listen(4000, '127.0.0.1');

function updatePage(req, res) {
    const fileUrl = url.parse(req.url, true);
    const filePath = fileUrl.query.url;

    const childProcess = fork("problem1childprocess.js", [filePath], {silent: true});
    childProcess.stdout.on('data', data => {
        res.write(data.toString());
    });

    childProcess.on('error', error => {
        res.end(error.message);
    });

    childProcess.on('exit', err => {
        res.end();
    });

}