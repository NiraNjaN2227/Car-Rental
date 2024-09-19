import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";

const FuturedVehicle = () => {
    const cars = [
        {
            img: car1,
            name: "Wolkswagan R6 2017",
            details: ["Sedan", "Manual", "Petrol"],
            price: '$8,25,999',
        },
        {
            img: car2,
            name: "Nissan GT-R 2016",
            details: ["SUV", "Auto", "Diesel"],
            price: '$5,20,999',
        },
        {
            img: car3,
            name: "Lexus LS 500 2015",
            details: ["Coupe", "Manual", "Petrol"],
            price: '$1,10,099',
        },
    ];

    return (
        <section className="future-vehicle">
            <p>Perfect For You</p>
            <h2>Featured Vehicles</h2>

            <div className="vehicle-container">
                {cars.map((car, index) => (
                    <div key={index} className="vehicle-card">
                        <div>
                            <img src={car.img} alt={`car ${index + 1}`} />
                            <div className="price-tag">{car.price}</div>
                        </div>
                        <div className="vehicle-details">
                            <h3>{car.name}</h3>
                            <div className="details-list">
                                {car.details.map((detail, i) => (
                                    <div key={i} className="detail-item">
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FuturedVehicle;
