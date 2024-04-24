// const express = require('express');
// const app = express();

// //Middleware function
// app.use('/',(req,res,next)=> {
//     console.log('This is a middleware function!');
//     next();
// })
// //Middleware function
// // app.use((req,res,next)=> {
// //     console.log('This is local middleware function!');
// //     next();
// // });
// app.use('/aboutme',(req,res,next)=>{
//     console.log('Hi this is 2nd middleware');
//     next();
// })
// //Route handler
// app.get('/',(req,res)=>{
//     res.send('Hello world');
// });

// app.get('/aboutme',(req,res)=>{
//     res.send('Hello world');
// });
// //Middleware function
// // app.use((req,res,next)=>{
// //     console.log('This is global middleware function!');
// //     next();
// // });


// app.listen(3003, ()=>{
//     console.log("server is running on port 3003");
// });

//Activity no 1

const express = require('express');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
    const logFilePath = __dirname + '/request.log';
    const logEntry = '${new Date().toISOString()}:${req.method} ${req.url}\n';
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('there is an error: ',err);
        }
    });
    next();
});

    
app.get('/', (req,res) => {
    res.end('Welcome');
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});