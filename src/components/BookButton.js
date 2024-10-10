import React from 'react';
import { Button } from '@mui/material';


const BookButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} sx={{color:"white"}}>
            Book Now
        </Button>
    );
};

export default BookButton;
