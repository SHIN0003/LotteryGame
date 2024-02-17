import React, { useState } from 'react';
import io from 'socket.io-client';
import { Link, useNavigate } from "react-router-dom";
import { Button , Container} from 'react-bootstrap';


function Home(){
   const pageStyle = {
     backgroundColor: 'transparent', // Set your desired background color
     minHeight: '100vh', // Ensure the background color covers the entire viewport height
     fontFamily: 'Academy Engraved LET',
     fontSize: '100px',
     color: 'white',
     textAlign: 'center',
   };
   const containerStyle = {
       textAlign: 'center',
       padding: '50px',
       backgroundColor: '#7a0a04',  // Set your desired background color
       minHeight: '10vh',  // Ensure the container takes at least the full height of the viewport
     };
   const buttonStyle = {
       fontFamily: 'Times New Roman', // Specify the desired font-family
       backgroundColor: '#f5aa2a',  // Set your desired button background color
       borderColor: 'orange',
       color: 'black',  // Set your desired button text color
       fontSize: '75px', // You can adjust the font size
       padding: '12px 24px', // You can adjust the padding
       borderRadius: '100px',
       cursor: 'pointer',
       position: 'relative', // You may need to set the position to relative
       left: '0px', // Adjust the left position to move the button horizontally
       top: '-50px', // Adjust the top position to move the button vertically
     };
     const navigate = useNavigate();
     const handleButtonClick = () => {
       navigate('/joinGame');
     };
   return (
       <Container style={containerStyle}>
         <div style={pageStyle}>
           <header style={pageStyle}>
               <p>PLAY THE LOTTO!!!</p><p>Chance to Win Even</p>
               <button style={buttonStyle} onClick={handleButtonClick}>
                   Start Game
               </button>
           </header>
         </div>
       </Container>
   );
}
export default Home;