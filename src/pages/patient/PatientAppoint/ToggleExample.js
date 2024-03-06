import React, { useState } from 'react';
import styled from 'styled-components';
import pic1 from '../../../images/pic1.jpg';
import user3 from '../../../images/ynez.jpg';

// Styled Components
const ToggleContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 5px;
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
    background-color: #1977cc;
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
const ToggleExample = () => {
  const [activeButton, setActiveButton] = useState('top-voices');
  const [content, setContent] = useState('This is the content for Top Voices.');
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, comment: 'Great doctor, highly recommended!', name: 'John Doe', profile: user3 },
    { id: 2, rating: 5, comment: 'Very knowledgeable and caring.', name: 'Jane Smith', profile: user3 },
    { id: 3, rating: 3, comment: 'Good experience overall.', name: 'Robert Johnson', profile: user3 },
  ]);

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
              src={doctor.Avatar}
              alt={doctor.name}
              className="profile-picture"
              style={{
                borderRadius: '50%',
                width: '120px', // Adjust size as needed
                height: '120px', // Adjust size as needed
                border: '2px solid #3498db', // Optional: Add a border
              }}
            />
            <DoctorName>{doctor.name}</DoctorName>
            <DoctorContactInfo>
              Phone: {doctor.phone}<br />
              Address: {doctor.address}<br />
            </DoctorContactInfo>
            <DoctorSpecialization>Specialization: {doctor.specialization}</DoctorSpecialization>
            <div>Experience: {doctor.experience}</div>
            <div>Qualification: {doctor.qualification}</div>
          </DoctorDetailsContainer>
        )}
        {activeButton === 'companies' && (
          <ReviewContainer>
            <h3>Reviews</h3>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <ReviewProfilePicture src={review.profile} alt={review.name} />
                <ReviewDetails>
                  <ReviewStars>{'★'.repeat(review.rating)}</ReviewStars>
                  <p>{review.comment}</p>
                  <p>{review.name}</p>
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
