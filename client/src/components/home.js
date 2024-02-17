//use react booststrap for styling NO CSS it will make it a lot easier to style
import React, { useState } from 'react';
import io from 'socket.io-client';
import { Link, useNavigate } from "react-router-dom";
import { Button , Container} from 'react-bootstrap';



function Home(){
    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '##bd0d0d',  // Set your desired background color
        minHeight: '100vh',  // Ensure the container takes at least the full height of the viewport
      };
    const buttonStyle = {
        fontFamily: 'Arial, sans-serif', // Specify the desired font-family
        backgroundColor: 'gold',  // Set your desired button background color
        borderColor: 'darkgoldenrod',
        color: '#ffffff',  // Set your desired button text color
        fontSize: '16px', // You can adjust the font size
        padding: '12px 24px', // You can adjust the padding
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'relative', // You may need to set the position to relative
        left: '0px', // Adjust the left position to move the button horizontally
        top: '-30px', // Adjust the top position to move the button vertically
      };
      const navigate = useNavigate();
      const handleButtonClick = () => {
        navigate('/joinGame');
      };
    return (
        <Container style={containerStyle}>
        <div className="App">
            <header className="App-header">
                <p>Play the Lotto!!</p><p>Chance to Win Even</p>
                <button style={buttonStyle} onClick={handleButtonClick}>
                    Start Game
                </button>
            </header>
            
        </div>
        </Container>
    );
}
export default Home;