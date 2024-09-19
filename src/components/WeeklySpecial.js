import React from 'react';
import bmw1 from "../assets/BMW1.png";
import benz from "../assets/benz.png";
import audi from "../assets/audi.png";
import meclearn from "../assets/meclearn.png";
import jeguar from "../assets/jeguar.png";

const WeeklySpecial = () => {
    return (
        <div className="weekly-special">
            <h3>Premium Car Collection</h3>
            <h2 className="section-title">Weekly Special</h2>
            <div className="car-grid">
                <div className="car-card card1">
                    <img src={bmw1} alt="BMW 1 Series M Coupe" />
                    <h3>BMW 1 Series M Coupe</h3>
                </div>
                <div className="car-card card2">
                    <img src={audi} alt="McLaren 650S" />
                    <h3>McLaren 650S</h3>
                </div>
                <div className="car-card card3">
                    <img src={benz} alt="Mercedes Benz C Class" />
                    <h3>Mercedes Benz C Class</h3>
                </div>
                <div className="car-card card4">
                    <img src={meclearn} alt="Audi A6 Saloon" />
                    <h3>Audi A6 Saloon</h3>
                </div>
                <div className="car-card card5">
                    <img src={jeguar} alt="Jaguar XE 2016" />
                    <h3>Jaguar XE 2016</h3>
                </div>
            </div>
        </div>
    );
};

export default WeeklySpecial;
