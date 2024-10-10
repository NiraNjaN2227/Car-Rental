import React from "react";
import bannerImage from "../assets/car-banner.png"

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-title">
                    <div className="hero-title-bar"></div>
                    <h4 className="hero-subtitle">Find Your Dream</h4>
                </div>
                <h1 className="hero-heading">Let's Rent Your Dream Car</h1>
                <p className="hero-description">Unlock the freedom of the open road with our rental cars, where every drive is an adventure waiting to happen.</p>
                <button className="hero-button">Learn More</button>
            </div>
            <div className="hero-image">
                <img src={bannerImage} alt="Car" />
            </div>
        </section>
    )
}

export default HeroSection;