// Require file system access
const fs = require("fs");

// Read file buffer 
var imgReadBuffer = fs.readFileSync('test-pattern.jpeg');

// Encode image buffer to hex
var imgHexEncode = Buffer.from(imgReadBuffer).toString('hex');

var hexBuffer = Buffer.from(imgHexEncode, 'hex');

// write encoded hex to stdout
process.stdout.write(imgHexEncode);