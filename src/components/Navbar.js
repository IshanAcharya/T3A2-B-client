import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <link to="/***enterlogo***">Type Tutor</link>
            </div>
            <div className="nav-links">
                <Link to="/type-tutor">Type Tutor</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
        </nav>
    );
};


export default Navbar;