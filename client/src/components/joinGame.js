import React, { useState } from 'react';
import io from 'socket.io-client';





const JoinGame = () => {
    const [roomCode, setRoomCode] = useState('');
    io.socket.emit('join room', roomCode);
    return (
        <div>
        <input type="text" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} />
            {/* <button onClick={}>Join Game</button> */}
        </div>
    );
};



export default JoinGame;