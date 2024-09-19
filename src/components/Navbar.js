import React from "react";
import logo from '../assets/Logo.svg';
import user from "../assets/user.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Auto Car" className="navbar-logo" />
            <ul className="navbar-menu">
                <li className="home">Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Gallery</li>
                <li>Brands</li>
                <li>Contact Us</li>
            </ul>
            <img src={user} alt="User" className="navbar-user" />
        </nav>
    );
};

export default Navbar;
