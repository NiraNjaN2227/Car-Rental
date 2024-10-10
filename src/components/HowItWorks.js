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
                    <h3>Rent Your Dream Car</h3>
                    <p> We ensure that you have the best options available for your journey.</p>
                </div>

                <div className="arrow">
                    <img src={topupar} alt="Top Arrow" />
                </div>

                <div className="step">
                    <img src={car} alt="Test Drive" />
                    <h3>Meet the car owner in person</h3>
                    <p>Check the car and its engine and later bargain the pricing.</p>
                </div>

                <div className="arrow">
                    <img src={lower} alt="Lower Arrow" />
                </div>

                <div className="step">
                    <img src={book} alt="Book Car" />
                    <h3>Book Your Car</h3>
                    <p>Confirm your car booking and fix the return date.</p>
                </div>

                <div className="arrow">
                    <img src={upar} alt="Up Arrow" />
                </div>

                <div className="step">
                    <img src={payment} alt="Payment" />
                    <h3>Payment & Receive</h3>
                    <p>Full payment should be paid initally. </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
