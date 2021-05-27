// Require file system access to save file
const fs = require("fs");

// Get hex from pipe
// stdin is encoded as utf-8
// as chunks are added, add onto end of data variable
const stdin = process.stdin;
let data = '';
stdin.setEncoding('utf8');
stdin.on('data', function (chunk) { data += chunk; });

// Decode hex and save file
// At the end of stdin, create file
stdin.on('end', function () {
    var hexBuffer = Buffer.from(data, 'hex');
    fs.writeFileSync("test2.jpeg", hexBuffer);
});
