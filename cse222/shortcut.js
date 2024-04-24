const fs = require('fs');
const readableStream = fs.createReadStream('eg.txt','utf8');
const writeableStream = fs.createWriteStream('eg1.txt');
readableStream.pipe(writeableStream);
writeableStream.on('finish',()=>{
    console.log("Data piped successfully from source to destination.");
});
