import React from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import dots from '../assets/dots.png';
import group from '../assets/group.png';

const testimonials = [
    {
        name: 'Niranjan P',
        image: client1,
        text: "I had a fantastic experience renting the Hyundai Creta for my family trip! The car was in excellent condition, clean, and provided ample space for everyone. The staff was friendly and made the booking process smooth and hassle-free. I will definitely rent from them again!",
        
    },
    {
        name: 'Nithin N',
        image: client2,
        text: "I rented the Mahindra Thar for a weekend getaway in the mountains, and it was the perfect choice! The off-road capabilities of the Thar made our adventure even more exciting. The service was prompt, and the team was very helpful. Highly recommend this rental service!",
        
    },
    {
        name: 'Hema S',
        image: client3,
        text: "The Maruti Suzuki Swift I rented was not only stylish but also fuel-efficient, making it great for my city commute. The entire process from booking to return was seamless, and the customer support was excellent. I’m really impressed and will be back for my next rental!",
        
    }
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-heading">Reviews</h2>
            <h3 className="client-heading">What Our Clients Say</h3>
            <div className="group-image-container">
                <img src={group} alt="Group" className="group-img" />
            </div>
            <div className="testimonial-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-image-container">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                            <img src={dots} alt="dots" className="dots-img" />
                        </div>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-designation">{testimonial.designation}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
