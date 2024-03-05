import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import StyleDoctorReviews from './StyleDoctorReview.jsx';

const DoctorReview = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewChange = (event) => {
        setNewReview(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const reviewObj = {
            review: newReview,
            rating: rating
        };
        setReviews([...reviews, reviewObj]);
        setNewReview('');
        setRating(0);
    };

    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

    return (
        <div>
        <StyleDoctorReviews>

        <div className="doctor-review-page">
            <h1>Doctor Reviews</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Review:
                    <textarea value={newReview} onChange={handleReviewChange} />
                </label>
                <label>
                    Rating:
                    <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} />
                </label>
                <button type="submit">Submit Review</button>
            </form>
            <h2>Reviews:</h2>
            <ul>
                {sortedReviews.map((review, index) => (
                    <li key={index}>
                        <div className="rating">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <FaStar key={i} className="star" />
                            ))}
                        </div>
                        <div>{review.review}</div>
                    </li>
                ))}
            </ul>
        </div>
        </StyleDoctorReviews>
        </div>
    );
};

export default DoctorReview;
