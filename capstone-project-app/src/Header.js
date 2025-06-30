import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="header" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="reservations" smooth={true} duration={500}>Reservations</Link></li>
                    <li><Link to="order" smooth={true} duration={500}>Order Online</Link></li>
                    <li><Link to="login" smooth={true} duration={500}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;