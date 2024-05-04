import React, { useState, useEffect } from 'react';
import hostURL from '../../../../data/URL';
import Loading from '../../../Loading/Loading';
import { getToken } from '../../../../data/Token';
import StyleViewReview from './StyleViewReview';
import { useNavigate } from 'react-router-dom';
import StyleHeader from '../StyleDocDash';
import Navbar from '../Navbar';
import { FaStar } from 'react-icons/fa'; // Import FaStar icon

const ViewReview = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [hasToken, setHasToken] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // Place useNavigate hook here to avoid reference errors

  useEffect(() => {
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken);
      setToken(retrivedToken);
    };

    checkTokenCookie();
    fetchData();
  }, [token, patients]);

  const fetchData = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/review/viewreviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPatients(data);
        setLoading(false);
      } else {
        console.error('Failed to fetch data. Server returned:', response.status, response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setLoading(false);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Redirect to the logout page using React Router
    navigate('/');
  };

  const renderStars = (rating) => {
    const starCount = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else {
        stars.push(<FaStar key={i} color="#e4e5e9" />);
      }
    }
    return stars;
  };

  return (
    <StyleHeader>
      <Navbar handleLogout={handleLogout} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
      <StyleViewReview>
        <div className="patient-page-container">
          <div className="title">Reviews</div>
          {loading ? (
            <Loading />
          ) : (
            <div className="patient-list">
              {patients.map((patient, index) => (
                <div key={patient.review_id} className="patient-item">
                  <img src={patient.patient_Avatar} alt={patient.name} className="avatar" />
                  <div className="patient-info">
                    <h3>{patient.patient_name}</h3>
                    <div className="rating">{renderStars(patient.rating)}</div> {/* Display stars instead of numeric rating */}
                    <div className="review">{patient.review}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </StyleViewReview>
    </StyleHeader>
  );
};

export default ViewReview;
