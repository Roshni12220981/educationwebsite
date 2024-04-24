const fs = require('fs');
//Create readable stream with a smaller chunk (e.g.,64 bytes)
const readableStream = fs.createReadStream('example.js',{encoding: 'utf8',highWaterMark: 100});
//Listen for the data event which indicates taht a chunck has been received
readableStream.on('data',(chunk) => {
    console.log( 'data',(chunk) => {
        console.log('Recieved chunk of data:');
        console.log(chunk);
    });
    
    //Listen for the 'end' event which indicates that all data has been received
    readableStream.on('end',() => {
        console.log('All data has been received');
    });
    //Listen for the 'error' event which indicates that an error has occurred
    readableStream.on('error',(err) => {
        console.log('Error reading the data:',err);
    });
});
