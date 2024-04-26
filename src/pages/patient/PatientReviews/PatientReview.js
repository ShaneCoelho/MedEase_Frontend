import React, { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import StyleDoctorReview from './StylePatientReview';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { getToken } from "../../../data/Token";
import hostURL from '../../../data/URL';

const PatientReview = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [hasToken, setHasToken] = useState(false);
    const [token, setToken] = useState(null);
    const location = useLocation();
    const doc_id = location.state?.id;
    const doc_Avatar = location.state?.Avatar;
    const doc_name = location.state?.name;

    useEffect(() => {
        // Function to check if the "token" cookie is present
        const checkTokenCookie = () => {
            const retrivedToken = getToken('token');
            setHasToken(!!retrivedToken); // Set hasToken to true if token exists, false otherwise
            setToken(retrivedToken);
            console.log(token)
        };

        checkTokenCookie();
    }, [token]);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission
        try {
            const response = await fetch(hostURL.link + '/api/patient/review/makereview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ doc_id, rating, review })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data); // Handle successful response
            // Reset form fields
            setRating(0);
            setReview('');

        } catch (error) {
            console.error('Error:', error);
            // Handle error response
        }

    };

    return (
        <StyleDoctorReview>
            <div className="container">
                <div className="doctor-profile">
                    <img src={doc_Avatar} alt="Doctor" className="doctor-image" />
                    <h2 className="doctor-name">{doc_name}</h2>
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
