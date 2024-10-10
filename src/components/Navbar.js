import React from "react";
import logo from '../assets/Logo.svg';
import user from '../assets/user.png';


const smoothScroll = (target, duration) => {
    const targetSection = document.getElementById(target);
    const targetPosition = targetSection.getBoundingClientRect().top; // Distance to the top of the target section
    const startPosition = window.pageYOffset; // Current scroll position
    let startTime = null;
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration); // Calculate new scroll position
      window.scrollTo(0, run); // Scroll to the calculated position
      if (timeElapsed < duration) requestAnimationFrame(animation); // Keep animating until the duration is reached
    };
  
    const ease = (t, b, c, d) => {
      // Easing function for smoother animation (Ease-In-Out)
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation); // Start the animation
  };
  
  const Navbar = () => {
    const handleScroll = (sectionId) => {
        smoothScroll(sectionId, 1000); // Set 1000ms for a 1-second smooth scroll transition
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Auto Car" className="navbar-logo" />
            <ul className="navbar-menu">
                <li onClick={() => handleScroll('home')}>Home</li>
                <li onClick={() => handleScroll('about')}>About</li>
                <li onClick={() => handleScroll('products')}>Products</li>
                <li onClick={() => handleScroll('gallery')}>Gallery</li>
                <li onClick={() => handleScroll('brands')}>Brands</li>
                <li onClick={() => handleScroll('contact')}>Contact Us</li>
            </ul>
            <img src={user} alt="User" className="navbar-user" />
        </nav>
    );
};
export default Navbar;
