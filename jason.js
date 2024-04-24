const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>
{
    if(req.url=="/"){
    fs.readFile('htmlfile.html','utf8',(err,data)=>{
        if(err){
            console.error(err);
            res.end("There was some error , check the console");
        }else{
            res.end(data);
        }

    });
}else if(req.url=="/write"){
    const message= "RSR....";
    fs.writeFile('eg.txt',message,'utf8',(err))=>{
        if(err){
            res.end("There was error");
        }
        else{
            res.end("Everything was OK");
        }
    }
}
    
}).listen(4000,()=>{
    console.log("server is running on port 4000");
});
//Type url localhost:4000


const http = require("http");
