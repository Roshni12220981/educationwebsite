const express = require('express');
const app = express();
const fs = require('fs');
//Middleware for parsing URL Encoded bodies

app.use(express.urlencoded({extended:true}));

//Route handler for serving form
app.get('/',(req,res)=>{
    const readStream = fs.createReadStream('login1.html');
    readStream.pipe(res);
});

//Route handler for post request
app.post('/submit',(req,res)=>{
    console.log(req.body);
    let data = JSON.stringify(req.body);
    const writeStream = fs.createWriteStream('body.json');
    writeStream.write(data);
    writeStream.end();
    res.end("Done");
});
 app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})