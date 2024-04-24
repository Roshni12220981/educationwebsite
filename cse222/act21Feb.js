const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    if(req.url=="/"){
const readableStream = fs.createReadStream('example.txt',{encoding: 'utf8', highWaterMark: 64});
const writeableStream = fs.createWriteStream('example2.txt');
        
        readableStream.on('data',(chunk)=>{
            writeableStream.write(chunk);
        })
    }
    else{
        res.end(404,'Not found.');
    
        
    }
});

server.listen(4000);