import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace 'http://localhost:3000' with your server address

const JoinGame = () => {
    const [roomCode, setRoomCode] = useState('');

    useEffect(() => {
        if (roomCode.trim() !== '') {
            socket.emit('join room', roomCode);
        }
    }, [roomCode]);

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
