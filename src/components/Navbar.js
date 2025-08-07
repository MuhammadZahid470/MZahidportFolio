import React, { useState } from "react";
import "../assets/components css/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <div className="custom-logo">
                    <span>Syed Farhan</span>
                </div>
            </div>
            <ul className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
                <li><a href="/" >Home</a></li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="exper" smooth={true} duration={500}>Experience</Link>
                </li>
                <li>
                    <Link to="education" smooth={true} duration={500}>Education</Link>
                </li>
            </ul>
            <div className="navbar__toggle" onClick={toggleMenu}>
                <div className={`bar bar1 ${isMenuOpen ? "rotate1" : ""}`}></div>
                <div className={`bar bar2 ${isMenuOpen ? "fade" : ""}`}></div>
                <div className={`bar bar3 ${isMenuOpen ? "rotate2" : ""}`}></div>
            </div>

        </nav>
    );
};

export default Navbar;
