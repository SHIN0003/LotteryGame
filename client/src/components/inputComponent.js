import React, { useState } from 'react';
import io from 'socket.io-client';
import { Container, Row, Col } from 'react-bootstrap';

const socket = io('http://localhost:3000'); // Connect to your server

const InputComponent = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (index, value) => {
    if (value === '' || (value.match(/^\d+$/) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 10)) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
      setErrorMessage(''); // Clear error message
    } else {
      setErrorMessage('Please enter a number between 1 and 10');
    }
  };

  const handleSubmit = () => {
    if (inputs.some(input => input === '')) {
      setErrorMessage('All four numbers must be set');
      return;
    }
    console.log(inputs);
    socket.emit('user input', inputs); // Send the combined input string to the server
    //redirect to next page
    setInputs(['', '', '', '']); // Clear the input fields
    //redirect to next page
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#3796de', 
    minHeight: '100vh',  
}

  return (
    <Container>
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          maxLength="2"
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
    </Container>
  );
};

export default InputComponent;
