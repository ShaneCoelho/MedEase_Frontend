import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import StyleDoctorReview from './StylePatientReview';
import styled from 'styled-components';

const PatientReview = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log('Rating:', rating);
        console.log('Review:', review);
        // Reset form fields
        setRating(0);
        setReview('');
    };

    return (
        <StyleDoctorReview>
            <div className="container">
                <div className="doctor-profile">
                    <img src="https://via.placeholder.com/150" alt="Doctor" className="doctor-image" />
                    <h2 className="doctor-name">Dr. John Doe</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="review-input">
                        <label htmlFor="review">Review:</label>
                        <textarea id="review" value={review} onChange={handleReviewChange} />
                    </div>
                    <div className="rating-input">
                        <label>Rating:</label>
                        <StarRating>
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={index < rating ? 'star-filled' : 'star-empty'}
                                    onClick={() => handleRatingChange(index + 1)}
                                />
                            ))}
                        </StarRating>
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </StyleDoctorReview>
    );
};

const StarRating = styled.div`
    display: flex;
    gap: 5px;
`;

export default PatientReview;
