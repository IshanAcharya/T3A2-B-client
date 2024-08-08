import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/profile" onClick={toggleMenu}>Profile</Link>
                <Link to="/type-tutor" onClick={toggleMenu}>Type Tutor</Link>
                <Link to="/" onClick={() => { handleLogout(); toggleMenu(); }}>Logout</Link>
            </div>
        </nav>
    );
};


export default Navbar;