import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';


function Home() {
    return (
        <div className="home-container">
            <div className="logo">
                <img src="reminder:enter logo path" alt="Type Tutor Logo" />
            </div>
            <p className="home-Text">
                In today's digital age, typing speed and accuracy are crucial life skills. Don't get left behind, improve your skills with the Typee Tutor App. 
            </p>
            <div className="buttons">
                <link to="/login-register"><button className="login-button">Login</button></link>
                <link to="/login-register"><button className="register-button">Register</button></link>
            </div>
        </div>
    );
}

export default Home;