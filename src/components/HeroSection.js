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
                <h1 className="hero-heading">Let's Finance Your Dream Car</h1>
                <p className="hero-description">Non dolor explicabo illo nam corrupti quis atque voluptatem. Dolorem dolores aperiam maxime ut et earum. Nihil aut aspernatur.</p>
                <button className="hero-button">Learn More</button>
            </div>
            <div className="hero-image">
                <img src={bannerImage} alt="Car" />
            </div>
        </section>
    )
}

export default HeroSection;