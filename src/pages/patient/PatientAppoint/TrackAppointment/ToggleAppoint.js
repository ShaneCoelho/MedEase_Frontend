import React, { useState } from 'react';
import styled from 'styled-components'; // Import default user profile picture

// Styled Components
const ToggleContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 15px;
  margin: 15px 320px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 25px auto;
    width: 100%;
  }

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
  padding: 35px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const AppointmentItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const AppointmentImage = styled.img`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  margin-right: 15px;
`;

const AppointmentDetails = styled.div`
  flex: 1;
`;

// React Component
const ToggleAppoint = () => {
  const [activeButton, setActiveButton] = useState('pending');
  const placeholderImageUrl = 'https://via.placeholder.com/150';
  const [appointments, setAppointments] = useState({
    pending: [
      { id: 1, name: 'John Doe', date: '2024-03-10', image:placeholderImageUrl  },
      { id: 2, name: 'Jane Smith', date: '2024-03-11', image:  placeholderImageUrl},
      { id: 3, name: 'Jane Smith', date: '2024-03-11', image:  placeholderImageUrl},
      { id: 4, name: 'Jane Smith', date: '2024-03-11', image:  placeholderImageUrl},
      { id: 5, name: 'Jane Smith', date: '2024-03-11', image:  placeholderImageUrl},
    ],
    approved: [
      { id: 3, name: 'Robert Johnson', date: '2024-03-12', time: 'Morning', image: placeholderImageUrl },
      { id: 2, name: 'Robert Johnson', date: '2024-03-12', time: 'Morning', image: placeholderImageUrl },
      { id: 4, name: 'Robert Johnson', date: '2024-03-12', time: 'Morning', image: placeholderImageUrl },
      { id: 1, name: 'Robert Johnson', date: '2024-03-12', time: 'Morning', image: placeholderImageUrl },
    ],
    rejected: [
      { id: 4, name: 'Emily Brown', date: '2024-03-13', image: placeholderImageUrl },
      { id: 2, name: 'Emily Brown', date: '2024-03-13', image: placeholderImageUrl },
    ],
  });

  const handleButtonClick = (view) => {
    setActiveButton(view);
  };

  return (
    <>
      <ToggleContainer>
        <ToggleButton active={activeButton === 'pending'} onClick={() => handleButtonClick('pending')}>
          Pending
        </ToggleButton>
        <ToggleButton active={activeButton === 'approved'} onClick={() => handleButtonClick('approved')}>
          Approved
        </ToggleButton>
        <ToggleButton active={activeButton === 'rejected'} onClick={() => handleButtonClick('rejected')}>
          Rejected
        </ToggleButton>
      </ToggleContainer>
      <ContentContainer>
        {activeButton === 'pending' && (
          <div>
            
            {appointments.pending.map(appointment => (
              <AppointmentItem key={appointment.id}>
                <AppointmentImage src={appointment.image} alt={appointment.name} />
                <AppointmentDetails>
                  <p>{appointment.name}</p>
                  <p>Date: {appointment.date}</p>
                </AppointmentDetails>
              </AppointmentItem>
            ))}
          </div>
        )}
        {activeButton === 'approved' && (
          <div>
            {appointments.approved.map(appointment => (
              <AppointmentItem key={appointment.id}>
                <AppointmentImage src={appointment.image} alt={appointment.name} />
                <AppointmentDetails>
                  <p>{appointment.name}</p>
                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                </AppointmentDetails>
              </AppointmentItem>
            ))}
          </div>
        )}
        {activeButton === 'rejected' && (
          <div>
            {appointments.rejected.map(appointment => (
              <AppointmentItem key={appointment.id}>
                <AppointmentImage src={appointment.image} alt={appointment.name} />
                <AppointmentDetails>
                  <p>{appointment.name}</p>
                  <p>Date: {appointment.date}</p>
                </AppointmentDetails>
              </AppointmentItem>
            ))}
          </div>
        )}
      </ContentContainer>
    </>
  );
};

export default ToggleAppoint;
