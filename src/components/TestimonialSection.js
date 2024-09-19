import React from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import dots from '../assets/dots.png';
import group from '../assets/group.png';

const testimonials = [
    {
        name: 'Miss Alison Hudson',
        image: client1,
        text: 'Pariatur eum repellendus. Quas est adipisci dicta. Repudiandae iure similique alias corrupti sapiente quo voluptatem sit hic.',
        designation: 'nulla illum omnis',
    },
    {
        name: 'Mr. Peyton Treutel',
        image: client2,
        text: 'Eum at veniam nihil ipsa. Adipisci et iste cumque sint sint totam iste doloribus. Adipisci et iste Alias aut asperiores voluptates delectus.',
        designation: 'ipsa perferendis nobis',
    },
    {
        name: 'Dameon Harvey',
        image: client3,
        text: 'Placeat nostrum nihil accusamus qui ea totam. nihil accusamus qui ea totam Ad quaerat est fiat ur est qui dicta laborum. Praentium.',
        designation: 'sapiente sequuntur',
    }
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-heading">Testimonial</h2>
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
