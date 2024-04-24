const express = require('express');
const socketIO = require('socket.io');
const path=require('path');
const app = express();
const server = app.listen(3000,()=>{
    console.log("Server started on port 3000");
});
const io = socketIO(server);
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'public'))
}

})
io.on('connection', socket => {
    console.log('A user connected');

    socket.io('join', username => {
        socket.username = username;
        io.emit('chat message',{
            
        })
    })
})