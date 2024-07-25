import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <div className="home-content">
                <p>In today's digital age, typing speed and accuracy are crucial life skills. Don't get left behind, improve your skills with the Type Tutor App.</p>
                <div className="home-buttons">
                    <Link to="/login-register" className="button">
                        Login/Register
                    </Link>
                </div>
            </div>
        </div>
    );        
};


export default Home;