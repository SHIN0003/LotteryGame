const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const roomCode = '3344'; // Function to generate a unique room code
socket.join(roomCode);

// Emit the room code to the big screen client
io.to('bigScreenSocketId').emit('room code', roomCode);


io.on('connection', (socket) => {
    console.log('A user connected with socket ID:', socket.id);
    //CHRIS IF U CAN SEE THIS THE LINE BELOW RECEIVES THE INPUT CAN YOU STORE IT TO A DATABASE
    // Listen for the 'user input' event from the client

    socket.on('join room', (roomCode) => {
      socket.join(roomCode);
      // Notify the big screen and other players in the room...
    });
    

    socket.on('user input', (input) => {
      console.log('Received input from client with socket ID:', socket.id, 'Input:', input);
      
      const {socketId, dataArray} = input;


      //setSocketData(())
      
      // Process the input and optionally send a response back to the client
      socket.emit('input response', 'Input received and processed');
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
