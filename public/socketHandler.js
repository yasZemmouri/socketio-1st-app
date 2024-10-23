'use strict';

const socket = io(); // Connect to the server

        // Function to send a message
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value;
            socket.emit('message', message); // Send the message to the server
            input.value = ''; // Clear input field
        }

        // Listen for messages from the server
        socket.on('message', (msg) => {
            const messagesList = document.getElementById('messages');
            const newMessage = document.createElement('li');
            newMessage.textContent = msg;
            messagesList.appendChild(newMessage); // Add the message to the list
        });