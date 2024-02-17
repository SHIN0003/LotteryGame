import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import PickNum from './picknum.js';// Adjust the path as needed
import { Button , Container} from 'react-bootstrap';

const socket = io('http://localhost:3001'); // Replace 'http://localhost:3000' with your server address

const JoinGame = () => {
    const [roomCode, setRoomCode] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const textStyle = {
      backgroundColor: '#7a0a04', // Set your desired background color
      minHeight: '50vh', // Ensure the background color covers the entire viewport height
      fontFamily: 'Impact',
      fontSize: '100px',
      color: 'white',
      textAlign: 'center',
    };
    const pageStyle = {
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f5c236',  // Set your desired background color
      minHeight: '100vh',  // Ensure the container takes at least the full height of the viewport
    };
    const buttonStyle = {
      fontFamily: 'Times New Roman', // Specify the desired font-family
      backgroundColor: '#e6bf25',  // Set your desired button background color
      borderColor: 'orange',
      color: 'black',  // Set your desired button text color
      fontSize: '16px', // You can adjust the font size
      padding: '12px 24px', // You can adjust the padding
      borderRadius: '100px',
      cursor: 'pointer',
      position: 'relative', // You may need to set the position to relative
      left: '25px', // Adjust the left position to move the button horizontally
      top: '0px', // Adjust the top position to move the button vertically
    };

    useEffect(() => {
        socket.on('game started', () => {
          setGameStarted(true);
        });
      
        // Clean up the listener when the component unmounts
        return () => {
          socket.off('game started');
        };
      }, []);

      if (gameStarted) {
        return <PickNum />;
      }

    return (
      <Container style={pageStyle}>
        <div style = {textStyle}>
          <p>Enter the Room Code</p>
            <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                style = {{ width: '300px', height: '40px', fontSize: '16px' }}
            />
            <button style={buttonStyle} onClick={() => socket.emit('join room', roomCode)}>JOIN GAME</button>
        </div>
      </Container>
    );
};

export default JoinGame;
