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
                    <span className="news-date">27 Dec 2017</span>
                    <h3 className="news-heading">Maxime doloribus dolor amet officiis veritatis. Nesciunt consequatur quia et.</h3>
                    <p className="news-text">
                        Cupiditate distinctio at animi. Nulla asperiores repellendus. Architecto doloremque omnis deleniti dolorem molestiae nam necessitatibus quasi non.
                    </p>
                </div>
            </div>

            <div className="news-grid">
                <div className="news-card">
                    <img src={lembo} alt="BMW" />
                    <div className="news-info">
                        <span className="news-date">20 Jan 2017</span>
                        <h4 className="news-heading">Labore nam qui qui atque. Aut beatae est numquam.</h4>
                        <p className="news-text">Quaerat et consequatur repudiandae eveniet necessitatibus. Corrupti eligendi rem et occaecati corrupti.</p>
                    </div>
                </div>
                <div className="news-card">
                    <img src={merc2} alt="Red Car" />
                    <div className="news-info">
                        <span className="news-date">03 Dec 2017</span>
                        <h4 className="news-heading">Dolorum eos dolor est animi omnis eum dicta. Ea.</h4>
                        <p className="news-text">Ut doloribus est aliquid et. Culpa molestiae tempora quaerat ut. Sed sit fugiat at quae beatae est ut est.</p>
                    </div>
                </div>
            </div>
            <button className='view-button'>View All</button>
        </div>
    );
};

export default LatestNews;
