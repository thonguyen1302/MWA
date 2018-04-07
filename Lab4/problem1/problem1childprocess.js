/**
 * Created by Sulav on 6/29/17.
 */

const fs = require("fs");

const readStream = fs.createReadStream(process.argv[2]);
readStream.pipe(process.stdout);