import React, { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import StyleDoctorReview from './StylePatientReview';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { getToken } from "../../../data/Token";
import hostURL from '../../../data/URL';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import SubHeader from '../../Shared/SubHeader';
import axios from 'axios';

const PatientReview = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [hasToken, setHasToken] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state
    const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility
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
        setLoading(true); // Set loading to true when form is submitted
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
            // Show the popup
            setShowPopup(true);

        } catch (error) {
            console.error('Error:', error);
            // Handle error response
        } finally {
            setLoading(false); // Set loading to false after form submission
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Header/>
            <SubHeader title="Reviews" subtitle="Trusted by patients, endorsed by results – our doctors exceed expectations." />

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
                        <button type="submit">{loading ? 'Submitting...' : 'Submit Review'}</button>
                    </form>
                </div>
            </StyleDoctorReview>

            {showPopup && (
                <Popup>
                    <div className="popup-content">
                        <span className="close" onClick={handlePopupClose}>
                            &times;
                        </span>
                        <p>Review submitted!</p>
                    </div>
                </Popup>
            )}

            <Footer/>
        </>
    );
};

const StarRating = styled.div`
    display: flex;
    gap: 5px;
`;

const Popup = styled.div`
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #223a66;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
    max-width: 80%;
    opacity: 0.9;

    .popup-content {
        color: white;
    }

    .close {
        position: absolute;
        top: -5px;
        right: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white; /* Close button color set to white */
    }
`;

export default PatientReview;
