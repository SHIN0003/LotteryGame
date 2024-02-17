import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import InputComponent from './inputComponent';
import handleInputChange from './inputComponent';

function PickNum(){
    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#3796de', 
        minHeight: '100vh',  
    }
    return (
        <Container>
            <div className="App">
                <header className="App-header">
                    <p>Pick Four Numbers (1-10)</p>
                    <InputComponent />
                </header>
            </div>            <AnimatedButton/>
        </Container>
        
    );
}
export default PickNum;