import React, { useState } from "react";
import suv from "../assets/suv.png"
import coupe from "../assets/coupe.png"
import convertible from "../assets/convertible.png"
import sedan from "../assets/sedan.png"
import minicar from "../assets/minicar.png"

const VehicleSearch = () => {

    const [price, setPrice] = useState(3000);

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    };

    return (
        <section className="vehicle-search">
            <h2>Find Your Dream Car</h2>
            <p>Unsure which vehicle you are looking for? Find it here</p>

            <div className="search-container">
                <div className="vehicle-type">
                    <div className="vehicle-type-item">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label style={{ color: '#000000', marginRight: "70px" }}>Select Vehicle Type:</label>

                            <div style={{ display: 'flex', gap: '60px', color: '#000000' }}>
                                <div className="vehicle-type-item">
                                    <img src={suv} alt="SUV" />
                                    <span>SUV</span>
                                </div>
                                <div className="vehicle-type-item">
                                    <img src={coupe} alt="SUV" />
                                    <span>Coupe</span>
                                </div>
                                <div className="vehicle-type-item">
                                    <img src={convertible} alt="SUV" />
                                    <span>Convertible</span>
                                </div>
                                <div className="vehicle-type-item">
                                    <img src={sedan} alt="SUV" />
                                    <span>Sedan</span>
                                </div>
                                <div className="vehicle-type-item">
                                    <img src={minicar} alt="SUV" />
                                    <span>Minicar</span>
                                </div>
                            </div>
                        </div>

                        <hr className="divider" />
                    </div>

                    <div className="filters">
                        <div className="filter-item">
                            <select>
                                <option> Select Brand</option>
                                <option> Toyota</option>
                                <option> BMW</option>
                                <option> Audi</option>
                            </select>
                        </div>

                        <div className="filter-item">
                            <select>
                                <option> Select Model</option>
                                <option> Model 1</option>
                                <option> Model 2</option>
                            </select>
                        </div>

                        <div className="filter-item">
                            <select>
                                <option> Select Year</option>
                                <option> 2020</option>
                                <option> 2021</option>
                                <option> 2022</option>
                            </select>
                        </div>

                        <div className="price-range">
                            <label>Price Range:</label>

                            <div className="range-values">
                                <span>$30,000</span>
                                <span>$1,30,000</span>
                            </div>

                            <input
                                type="range"
                                min="30000"
                                max="130000"
                                value={price}
                                onChange={handlePriceChange}
                            />
                            <p>${Number(price).toLocaleString()}</p>
                        </div>

                        <div style={{ paddingTop: '50px' }}>
                            <button className="find-vehicle-button">
                                Find A Vehicle
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default VehicleSearch;