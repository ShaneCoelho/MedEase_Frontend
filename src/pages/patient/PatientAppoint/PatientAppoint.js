import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StylePatientAppoint from "./StylePatientAppoint";
import styled from "styled-components";
import ToggleExample from './ToggleExample'; // Import the ToggleExample component

const PatientAppoint = () => {
  const [formData, setFormData] = useState({
    date: new Date(),
    time: 'Morning',
    description: '',
    gender: '',
    review: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  
  const loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsAppointmentBooked(true);

    setSelectedFile(null);
  };

  const handlePopupClose = () => {
    setIsAppointmentBooked(false);
  };

  return (
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
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Appointment Date</span>
                  <StyledDatePicker
                    selected={formData.date}
                    onChange={(date) => setFormData((prevData) => ({ ...prevData, date }))}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select your appointment date"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    minDate={new Date()}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Preferred Time</span>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>

                <div className="input-box-2">
                  <label htmlFor="avatar">Attach Documents</label><br />
                  <input id="avatar" type="file" name="avatar" accept=".pdf, .doc, .docx" />
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
            <ToggleExample />
          </div>
        </div>
      </StylePatientAppoint>
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
