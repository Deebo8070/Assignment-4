import React, { useState } from 'react';
import Logo from './images/logo.jpg';
import './Header.css';

function HeaderAlt() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-container">
            <div className="header-content">
                <img src={Logo} alt="Logo" className="logo" />
                <h1>LMS - Learning Management System</h1>
            </div>
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-links">
                    <a href="/" onClick={toggleMenu}>Homepage</a>
                    <a href="/Courses" onClick={toggleMenu}>Courses</a>
                    <a href="/Login" onClick={toggleMenu}>Login</a>
                </div>
            </nav>
        </div>
    );
}

export default HeaderAlt;