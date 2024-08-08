import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Define Navbar component to handle navigation in app
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    // Render navigation bar with hamburger menu and links to navigate around app
    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
                <Link to="/type-tutor" onClick={() => setIsOpen(false)}>Type Tutor</Link>
                <Link to="/" onClick={() => { handleLogout(); setIsOpen(false); }}>Logout</Link>
            </div>
        </nav>
    );
};


export default Navbar;