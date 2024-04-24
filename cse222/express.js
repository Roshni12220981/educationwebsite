// const express=require('express');
// const fs = require('fs');
// const querystring = require('query');

app.get('/submit',(req,res)=>{
    //Access data sent through query parameters
    const name = req.query.name;
    const email = req.query.email;
    //Do something with the data (e.g., )
})


//Route handler for homepage route
app.get('/',(req,res)=>{ //It is handling home route (home page)
    res.send("Hello world");
})
//route handle
app.get('/',(req,res)=>{
    res.send("Hi I am 2nd Route Handler");
})
//route handle for about me

app.get('/aboutme',(req,res)=>{
    res.send("This is about me");
})

app.listen(4000);//when we click on this host 

//Question: Write a code demonstartiong how express.js sets up a server to handle GET requests at '/readfile', read the content of 'example.txt' and send it as a response to browser
const express = require('express');

const app = express();

app.get('/readfile', (req, res) => {
    const readStream = fs.createReadStream('example.txt');
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Conten-Encoding': 'gzip',//Setting the content encoding
    });
    //Compressing the file and piping it to rseponse stream
    readStream.pipe(zlib.Gzip()).pipe(res);
});

app.listen(4000, () => {
    console.log("Server running on port 4000.")
});

//Question: Write a code demonstartiong how express.js sets up a server to handle GET requests at '/readfile', read the content of 'example.txt' and send it as a response to browser


//Serve this login page using Express.js on the /login route.