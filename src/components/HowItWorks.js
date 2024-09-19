import React from 'react';
import search from "../assets/search.png";
import car from "../assets/car.png";
import book from "../assets/book.png";
import payment from "../assets/payment.png";
import topupar from "../assets/topupar.png";
import lower from "../assets/lower.png";
import upar from "../assets/upar.png";

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <h2 className="section-title">How It Works</h2>
            <div className="steps-row">
                <div className="step">
                    <img src={search} alt="Search Car" />
                    <h3>Search Your Dream Car</h3>
                    <p>Et aut omnis eligendi autem nobis id aliquid. Repellat est expedita facere.</p>
                </div>

                <div className="arrow">
                    <img src={topupar} alt="Top Arrow" />
                </div>

                <div className="step">
                    <img src={car} alt="Test Drive" />
                    <h3>Take a Test Drive</h3>
                    <p>Sed et voluptate maxime perferendis cum occaecati.</p>
                </div>

                <div className="arrow">
                    <img src={lower} alt="Lower Arrow" />
                </div>

                <div className="step">
                    <img src={book} alt="Book Car" />
                    <h3>Book Your Car</h3>
                    <p>At deleniti tenetur. Placeat consequuntur provident sed.</p>
                </div>

                <div className="arrow">
                    <img src={upar} alt="Up Arrow" />
                </div>

                <div className="step">
                    <img src={payment} alt="Payment" />
                    <h3>Payment & Receive</h3>
                    <p>Dolorem necessitatibus dicta ipsum sit. Beatae eos placeat.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
