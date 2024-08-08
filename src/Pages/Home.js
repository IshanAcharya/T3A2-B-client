import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css';

// Define Home component
const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home-content">
                <p>In today's digital age, typing speed and accuracy are crucial life skills. Don't get left behind, improve your skills with the Type Tutor App.</p>
                <div className="home-buttons">
                    <Link to="/login-register" className="button">
                        Start Typing
                    </Link>
                </div>
            </div>
        </div>
    );        
};

// Export Home component
export default Home;