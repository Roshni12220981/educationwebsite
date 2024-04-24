const fs = require('fs');
const express = require('express');
//middleware to parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));

//Simulated user database
// const users = [
//     { id: 1, username: 'John', password: 'wick'},
// ];

//Middleware fucntion for authentication
app.use('/profile',(req,res,next) => {
    //Extrect username and password from request body   
    const {username, password} = req.body;
    
    const user = users.find(u => u.username === username && u.password === password));
    //If the user is found set it on the request ob
    //Implement a middle ware function to authenticate that user checks if a user is logged in before granting access to the profile and /checkout routes .Assume that with authentication details are store in a simulated databse.


    if(user){
        req.user = user;
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
});

//public route
app.get('/',(req,res) => {
    res.send('Welcome to the public route!');
});
//Route to server
app.get('/login',(req,res) => {
    fs.readFile(_dirname+'/login1.html','utf-8,(err,data)=>{
        if(err){
            console.error(err);
            res.send("Dsiplay error");
        }else{
            res.end(data);
        }
    });

    //our protected routes
    app.post('/profile',(req,res) => {
        res.send('Welcome ${req.user.usrename}!');
    });

    app.get("/",(req,res) => {
        res.send('Welcome to the public route!');
    });
    app.get("/admin
    "
    
    )
    app.listen(3000,()=>{
        if(authentiaction = )
    })

    const req_time = Date.now();
    cosnt date = new Date();
    const method = req.method;
    const url = req.url;
    const res_time = Date.now() - req_time;
    fs.appendFile('request.log', 'log', function(err,log){
        if(err)
        {
            console.error(err);
        }
        if(req.url =='/profile')
    })

    //Start the server
    const post = 3000;
    app.listen(port,() => {
        console.log(`Server is running on port ${post}`);
    }); 
