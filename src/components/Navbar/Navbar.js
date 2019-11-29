import React from 'react';
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
     <h1>Tasty's Restaurant</h1>
        <ul className="nav-links">
                <li><a href="/" className="nav-link">home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link active">tours</a></li>
        </ul>  
        </nav>
    )
}
