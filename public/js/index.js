var socket = io();

socket.on('connect', function () {
    console.log('User was connected from client');
    
    socket.emit('createMessage', {
        from: 'Jane',
        message: 'Ok we meet at Hotel Park'
    });
});

socket.on('newMessage', function (messageContentReceived) {
    console.log(`Message content received: ${JSON.stringify(messageContentReceived, null, 2)}`)
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});
