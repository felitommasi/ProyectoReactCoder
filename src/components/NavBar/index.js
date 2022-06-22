import React from 'react';
import CartWidget from "../CartWidget"
import "./styles.css";

const navLinks = [
    {
        id: 1,
        label: 'Home',
    },
    { 
        id: 2, 
        label: 'About', 
    },
    {
        id: 3, 
        label: 'Contact',
    },
];

const NavBar = () => {
    return (
        <div className="nav">
            <h1 className="nav-logo">Manawa</h1>
            <div>
                {navLinks.map((item) => (
                    <a href="/" className="nav-link" key={item.id}>
                        {item.label}
                    </a>
                ))}
            </div>
            <CartWidget />
        </div>
    );
};

export default NavBar;