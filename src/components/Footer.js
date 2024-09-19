import React from 'react';
import logo from "../assets/Logo.svg";
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Auto Car" />
                    <p>Dolor voluptates sunt molestias quia est adipisci. Officiis quae consequuntur nam tempora.</p>

                    <div className="social-icon-media">
                        <img src={facebook} alt="Facebook" />
                        <img src={twitter} alt="Twitter" />
                        <img src={instagram} alt="Instagram" />
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Customer Services</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>Sell Your Car</li>
                        <li>Reviews</li>
                        <li>Latest News</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Quick links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Term & Condition</li>
                        <li>Privacy Policy</li>
                        <li>Delivery Policy</li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h4>Newsletter</h4>
                    <p>Stay always in touch! Subscribe to our newsletter.</p>
                    <input type="email" placeholder="Enter Your Email" />
                    <button className="subscribe-btn">Subscribe Now</button>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© 2024 Autodrive. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
