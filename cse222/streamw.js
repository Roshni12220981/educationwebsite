const fs = require('fs');
const writeableStream = fs.createWriteStream('example.txt');
const data = 'Hello, sunshine';
writeableStream.write(data);
writeableStream.end();