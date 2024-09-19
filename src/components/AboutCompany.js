import React from "react";
import companyImage from "../assets/company-car.png"

const AboutCompany = () => {
    return (
        <section className="about-company">
            <div className="about-company-text">
                <h4>About Comapny</h4>
                <p>For 25 years, Car Leader has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created.</p>

                <p> A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.previous car listings in a given market. We call this estimate the Car Leader Instant Market Value.</p>
                <a href="#">Read More</a>
            </div>
            <div className="about-company-image">
                <img src={companyImage} alt="Company car" />
            </div>
        </section>
    )
}

export default AboutCompany