const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Robert',
        text: 'Shall we meet at 6PM',
        createdAt: 21323432
    });

    socket.on('createMessage', (messageFromClient) => {
        messageFromClient.createdAt = new Date().getTime();
        console.log(`Message content received from client: ${JSON.stringify(messageFromClient, null, 2)}`);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server started successfully on the port: ${port}`);
});