import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src="/TypeTutorLogo.png" alt="Type Tutor Logo" className="logo" />
            </Link>
            <h1>Type Tutor</h1>
        </header>
    );
};

export default Header;