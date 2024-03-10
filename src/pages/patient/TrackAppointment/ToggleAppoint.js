import React, { useState,useEffect } from 'react';
import styled from 'styled-components'; // Import default user profile picture
import { getToken } from "../../../data/Token";
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';

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
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState('pending');
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);
  const [appointments, setAppointments] = useState({
    pending: [],
    approved: [],
    rejected: []
});

  useEffect(() => {
    // Function to check if the "token" cookie is present
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken); // Set hasToken to true if token exists, false otherwise
      setToken(retrivedToken);
      console.log(token)
    };

    checkTokenCookie();
    fetchAppointmentData();
  }, [token,appointments]);

  const handleButtonClick = (view) => {
    setActiveButton(view);
  };


  const fetchAppointmentData = async () => {
    try {
        const response = await fetch(hostURL.link + '/api/patient/track/trackappointment', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
                
            },
            
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setAppointments(data);
        setLoading(false);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
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
      {loading ? (
        <Loading />
      ) : (
      <ContentContainer>
        {activeButton === 'pending' && (
          <div>
            
            {appointments.pending.map(appointment => (
              <AppointmentItem key={appointment.appoint_id}>
                <AppointmentImage src={appointment.Doc_Avatar} alt={appointment.doc_name} />
                <AppointmentDetails>
                  <p>{appointment.doc_name}</p>
                  <p>Date: {appointment.date}</p>
                </AppointmentDetails>
              </AppointmentItem>
            ))}
          </div>
        )}
        {activeButton === 'approved' && (
          <div>
            {appointments.approved.map(appointment => (
              <AppointmentItem key={appointment.appoint_id}>
                <AppointmentImage src={appointment.Doc_Avatar} alt={appointment.doc_name} />
                <AppointmentDetails>
                  <p>{appointment.doc_name}</p>
                  <p>Date: {appointment.date}</p>
                  <p>Time Slot: {appointment.time_slot}</p>
                </AppointmentDetails>
              </AppointmentItem>
            ))}
          </div>
        )}
        {activeButton === 'rejected' && (
          <div>
            {appointments.rejected.map(appointment => (
              <AppointmentItem key={appointment.appoint_id}>
                <AppointmentImage src={appointment.Doc_Avatar} alt={appointment.doc_name} />
                <AppointmentDetails>
                  <p>{appointment.doc_name}</p>
                  <p>Date: {appointment.date}</p>
                </AppointmentDetails>
              </AppointmentItem>
            ))}
          </div>
        )}
      </ContentContainer>
      )}
    </>
  );
};

export default ToggleAppoint;
