import React, { useState } from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import successImg from "../assets/success.gif"; // Image for success dialog
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Typography } from "@mui/material"; // Material-UI imports
import BookButton from './BookButton'; // Import your custom button component

const FuturedVehicle = () => {
    const [open, setOpen] = useState(false); // State to manage form dialog visibility
    const [successOpen, setSuccessOpen] = useState(false); // State to manage success dialog visibility
    const [formData, setFormData] = useState({
        name: '',
        fromDate: '',
        toDate: '',
        paymentOption: ''
    });

    const cars = [
        {
            img: {
                src: car1,
                width: "200",
                height: "250"
            },
            name: "Wolkswagan R6 2017",
            details: ["Sedan", "Etios", "Petrol"],
            price: 'Rs 2300/day',
        },
        {
            img: {
                src: car2,
                width: "200",
                height: "250"
            },
            name: "Nissan GT-R 2016",
            details: ["SUV", "safari", "Diesel"],
            price: 'Rs 2700/day',
        },
        {
            img: {
                src: car3,
                width: "200",
                height: "250"
            },
            name: "Lexus LS 500 2015",
            details: ["Hatchback", "Tata Altroz", "Petrol"],
            price: 'Rs 2500/day',
        },
    ];

    // Function to open the form dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Function to close the form dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = () => {
        console.log(formData); // Handle form submission logic here
        setOpen(false); // Close the form dialog
        setSuccessOpen(true); // Open the success dialog
    };

    // Function to close the success dialog
    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    return (
        <section className="future-vehicle">
            <p>Perfect For You</p>
            <h2>Featured Vehicles</h2>

            <div className="vehicle-container">
                {cars.map((car, index) => (
                    <div key={index} className="vehicle-card">
                        <div>
                            <img 
                                src={car.img.src} 
                                alt={`Car ${car.name}`} 
                                width={car.img.width} 
                                height={car.img.height} 
                            />
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
                        {/* Book Now Button Aligned to the right */}
                        <div className="book-button">
                            <BookButton onClick={handleClickOpen} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Form Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book a Vehicle</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        name="name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        label="From Date"
                        name="fromDate"
                        type="date"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        value={formData.fromDate}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        label="To Date"
                        name="toDate"
                        type="date"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        value={formData.toDate}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        label="Payment Option"
                        name="paymentOption"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.paymentOption}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>

            {/* Success Dialog */}
            <Dialog open={successOpen} onClose={handleSuccessClose}>
                <DialogTitle>Booking Successful</DialogTitle>
                <DialogContent>
                    <Typography align="center">
                        <img src={successImg} alt="Success" style={{ width: "200px" }} />
                    </Typography>
                    <Typography align="center" variant="h6" gutterBottom>
                        Your booking is confirmed! Please come for pickup.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default FuturedVehicle;

