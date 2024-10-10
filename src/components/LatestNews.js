import React from 'react';
import audi2 from "../assets/audi2.png"
import lembo from "../assets/lembo.png"
import merc2 from "../assets/merc2.png"

const LatestNews = () => {
    return (
        <div className="news-section">
            <h2 className="news-title">What's New</h2>
            <h1 className="main-title">Latest News & Updates</h1>

            <div className="featured-news">
                <div className="news-image">
                    <img src={audi2} alt="Audi" />
                </div>
                <div className="news-content">
                    <span className="news-date">27 Aug 2024</span>
                    <h3 className="news-heading">Mahindra Thar 2022</h3>
                    <p className="news-text">
                    Perfect for off-road adventures! The Thar is ready to hit the trails.Available to rent now! Enjoy the perfect blend of style and performance on your journeys.

</p>
                </div>
            </div>

            <div className="news-grid">
                <div className="news-card">
                    <img src={lembo} alt="BMW" />
                    <div className="news-info">
                        <span className="news-date">20 Aug 2024</span>
                        <h4 className="news-heading">Honda City 2023</h4>
                        <p className="news-text">Stylish and spacious, the City is available for your rental needs.</p>
                    </div>
                </div>
                <div className="news-card">
                    <img src={merc2} alt="Red Car" />
                    <div className="news-info">
                        <span className="news-date">03 Oct 2024</span>
                        <h4 className="news-heading">Hyundai Creta 2022</h4>
                        <p className="news-text">Ready for your next adventure! Rent this popular SUV today.</p>
                    </div>
                </div>
            </div>
            <button className='view-button'>View All</button>
        </div>
    );
};

export default LatestNews;
