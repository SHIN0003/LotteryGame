import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import PickNum from 'client/src/components/picknum.js';// Adjust the path as needed
const socket = io('http://localhost:3001'); // Replace 'http://localhost:3000' with your server address

const JoinGame = () => {
    const [roomCode, setRoomCode] = useState('');
    const [gameStarted, setGameStarted] = useState(false);

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
        <div>
            <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
            />
            <button onClick={() => socket.emit('join room', roomCode)}>Join Game</button>
        </div>
    );
};

export default JoinGame;
