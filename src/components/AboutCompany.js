import React from "react";
import companyImage from "../assets/company-car.png"

const AboutCompany = () => {
    return (
        <section className="about-company">
            <div className="about-company-text">
                <h4>About Comapny</h4>
                <p>Looking for a reliable and affordable car rental? You've come to the right place! At [Auto cars], we offer a wide range of vehicles to meet your needs—whether it's a quick business trip, a family vacation, or just getting around town.</p>
                <p>With flexible booking options, competitive prices, and exceptional customer service, renting a car has never been easier. Explore our selection and hit the road with confidence. Book now and experience convenience like never before!</p>
                </div>
                <div className="about-company-image">
    <img src={companyImage} alt="Company car" width="100" height="500" />
</div>
        </section>
    )
}

export default AboutCompany