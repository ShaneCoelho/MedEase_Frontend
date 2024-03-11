import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StylePatientAppoint from "./StylePatientAppoint";
import styled from "styled-components";
import ToggleExample from './ToggleExample'; // Import the ToggleExample component
import { useLocation } from 'react-router-dom';
import { getToken } from "../../../data/Token";
import hostURL from '../../../data/URL';
import { addDays } from 'date-fns';
import Header from '../../Shared/Header/Header.js';
import Footer from '../../Shared/Footer/Footer.js';
import SubHeader from '../../Shared/SubHeader.js';


const PatientAppoint = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);
  const location = useLocation();
  const doc_id = location.state?.id;
  const doc_Avatar = location.state?.Avatar;
  const doc_name = location.state?.name;
  const [appointmentData, setAppointmentData] = useState({
    id: doc_id,
    name: doc_name,
    preferred_time: 'Morning',
    description: '',
    date: new Date(),
    Avatar: doc_Avatar
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
  }, [token]);

  const loadFile = function (event) {
    // var image = document.getElementById('output');
    const file = event.target.files[0];
    // image.src = URL.createObjectURL(file);
    setSelectedFile(file)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();



    const formData = new FormData();

    formData.append('file', selectedFile);

    formData.append('data', JSON.stringify(appointmentData));

    try {
      const response = await fetch(hostURL.link + '/api/patient/appointment/makeappointment', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          // 'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      // Check if the response is successful (status code 2xx)
      if (response.ok) {
        setIsAppointmentBooked(true);

        setSelectedFile(null);
      } else {
        console.error('Failed to submit form. Server returned:', response.status, response.statusText);
        alert("something went wrong" + response.status)
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }

  };

  const handlePopupClose = () => {
    setIsAppointmentBooked(false);
  };

  return (

    <div>
    <Header /> 
    <SubHeader title="Patient Appointment"/>
    <div>
      <StylePatientAppoint>
        <div className="pa-body">
          <div className="title">Patient Appointment</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Description</span>
                  <input
                    type="text"
                    placeholder="Enter issues faced"
                    name="description"
                    value={appointmentData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Appointment Date</span>
                  <StyledDatePicker
                    selected={appointmentData.date}
                    onChange={(date) => setAppointmentData((prevData) => ({ ...prevData, date }))}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select your appointment date"
                    // showYearDropdown
                    // scrollableYearDropdown
                    // yearDropdownItemNumber={0}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 7)} 
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Preferred Time</span>
                  <select
                    name="preferred_time"
                    value={appointmentData.preferred_time}
                    onChange={handleChange}
                    required
                  >
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                <div className="input-box-2">
                  <label htmlFor="avatar">Attach Documents</label><br />
                  <input onChange={loadFile} id="avatar" type="file" name="avatar" accept=".pdf, .doc, .docx" />
                </div>

              </div>

              <div className="button">
                <input type="submit" value="Book Appointment" />
              </div>
            </form>


            {isAppointmentBooked && (
              <Popup>
                <div className="popup-content">
                  <span className="close" onClick={handlePopupClose}>
                    &times;
                  </span>
                  <p>Appointment booked!</p>
                  <p>Go to the dashboard to view live status.</p>
                </div>
              </Popup>
            )}

            {/* Embedding ToggleExample component */}
            <ToggleExample doc_id={doc_id} />
          </div>
        </div>
        </StylePatientAppoint>
    </div>
    <Footer /> 
  </div>
  );
};

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Popup = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 0px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;

  .popup-content {
    color: black;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
  }
`;

export default PatientAppoint;
