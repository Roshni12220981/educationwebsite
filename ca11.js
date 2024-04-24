const http = require('http');
const fs = require('fs');
const querystring=require('querystring'); 

http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile('caform.html',(err,data)=>{
            if(err){
                console.error(err);
                res.end("Error , check Console.")
            }
            res.end(data);
        })
    }else if(req.url=="/save-json"){
        let body="";
        req.on('data',(chunk)=>{
            body+=chunk;
            console.log(body);
        })
        req.on('end',()=>{
            const newData=querystring.parse(body).data;
            console.log(newData);
        })
    }
}).listen(4002);