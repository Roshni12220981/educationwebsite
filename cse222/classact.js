//How can you create a Node.js server that serves a specific text file, compresses it with gzip encoding and dynamically responds to HTTP requests?Provide a detailed code solution

const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(filePath);
    res.writeHead(200,{
        'Content-Type': 'text/plain',
        'Conten-Encoding': 'gzip',//Setting the content encoding
    });
    //Compressing the file and piping it to rseponse stream
    readStream.pipe(zlib.Gzip()).pipe(res);

    }
        fs.readFile('example.txt',(err,data)=>{
            if(err){
                console.error(err);
                res.end("There was some error, check the console");
            }else{
                res.end(data);
            }
        })
    }
    });