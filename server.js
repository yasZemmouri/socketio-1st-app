const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Set up Express and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (like HTML) from the public directory
app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for messages from the client
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        
        // Broadcast the message to all connected clients
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
