import React, { useState, useEffect } from 'react';
import { getToken } from "../../../data/Token";
import hostURL from '../../../data/URL';
import styled from 'styled-components';
import pic1 from '../../../images/pic1.jpg';
import user3 from '../../../images/ynez.jpg';

// Styled Components
const ToggleContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 7px;
  margin: 5px;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.active &&
    `
    background-color: #002750;
    color: #fff;
  `}
`;

const ContentContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`;

const DoctorDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DoctorName = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;

const DoctorContactInfo = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DoctorSpecialization = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const ReviewItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ReviewStars = styled.div`
  color: gold;
`;

const ReviewDetails = styled.div`
  margin-left: 15px;
`;

const ReviewProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
`;

// React Component
const ToggleExample = (props) => {
  const [activeButton, setActiveButton] = useState('top-voices');
  const [content, setContent] = useState('This is the content for Top Voices.');
  const [doctorDetails, setDoctorDetails] = useState({});
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, comment: 'Great doctor, highly recommended!', name: 'John Doe', profile: user3 },
    { id: 2, rating: 5, comment: 'Very knowledgeable and caring.', name: 'Jane Smith', profile: user3 },
    { id: 3, rating: 3, comment: 'Good experience overall.', name: 'Robert Johnson', profile: user3 },
  ]);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Function to check if the "token" cookie is present
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken); // Set hasToken to true if token exists, false otherwise
      setToken(retrivedToken);
      console.log(token)
    };

    checkTokenCookie();
    fetchDoctorDetails();
    console.log(doctorDetails)
  }, [token,doctorDetails]);


  // Mock doctor data
  const doctor = {
    Avatar: pic1, // Assuming doc1.jpg is imported correctly
    name: "Dr. Meredith Grey",
    phone: "+1234567890",
    address: "123 Street, Seattle",
    specialization: "General Surgeon",
    experience: "10 years",
    qualification: "MBBS, MD"
  };

  const fetchDoctorDetails = async () => {

    const id = props.doc_id;

    try {
      const response = await fetch(hostURL.link + '/api/patient/appointment/viewdoctordetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch doctor details: ${response.status}`);
      }

      const data = await response.json();
      setDoctorDetails(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleButtonClick = (view) => {
    setActiveButton(view);
    // Replace this with your logic to fetch or display content
    // This example uses placeholder text
    setContent(`Showing content for ${view}.`);
  };

  return (
    <>
      <ToggleContainer>
        <ToggleButton active={activeButton === 'top-voices'} onClick={() => handleButtonClick('top-voices')}>
          Doctor Details
        </ToggleButton>
        <ToggleButton active={activeButton === 'companies'} onClick={() => handleButtonClick('companies')}>
          Reviews
        </ToggleButton>
      </ToggleContainer>
      <ContentContainer>
        {activeButton === 'top-voices' && (
          <DoctorDetailsContainer>
            <img
              src={doctorDetails.Avatar}
              alt={doctorDetails.name}
              className="profile-picture"
              style={{
                borderRadius: '50%',
                width: '120px', // Adjust size as needed
                height: '120px', // Adjust size as needed
                border: '2px solid #3498db', // Optional: Add a border
              }}
            />
            <DoctorName>{doctorDetails.name}</DoctorName>
            <DoctorContactInfo>
              Phone: {doctorDetails.phone}<br />
              Address: {doctorDetails.address}<br />
            </DoctorContactInfo>
            <DoctorSpecialization>Specialization: {doctorDetails.specialization}</DoctorSpecialization>
            <div>Experience: {doctorDetails.experience}</div>
            <div>Qualification: {doctorDetails.qualification}</div>
          </DoctorDetailsContainer>
        )}
        {activeButton === 'companies' && (
          <ReviewContainer>
            <h3>Reviews</h3>
            {doctorDetails.reviews.map(review => (
              <ReviewItem key={review.review_id}>
                <ReviewProfilePicture src={review.patient_Avatar} alt={review.patient_name} />
                <ReviewDetails>
                  <ReviewStars>{'★'.repeat(review.rating)}</ReviewStars>
                  <p>{review.review}</p>
                  <p>{review.patient_name}</p>
                </ReviewDetails>
              </ReviewItem>
            ))}
          </ReviewContainer>
        )}
      </ContentContainer>
    </>
  );
};

export default ToggleExample;
