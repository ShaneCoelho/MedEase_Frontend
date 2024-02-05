import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StylePatientAppoint from "./StylePatientAppoint";
import styled from "styled-components";

const PatientAppoint = () => {
  const [formData, setFormData] = useState({
    date: new Date(), // Initialize date with today's date
    time: 'Morning',
    description: '',
    gender: '',
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
          <div className="container">
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
                     minDate={new Date()}  // Set minDate to the current date
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
                                <label for="avatar">Attach Documents</label><br />
                                    <input id="avatar" type="file" name="avatar" accept=".pdf, .doc, .docx" />


                    </div>
                

                  <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" value="Male" onChange={handleChange} />
                    <input type="radio" name="gender" id="dot-2" value="Female" onChange={handleChange} />
                    <input type="radio" name="gender" id="dot-3" value="Prefer not to say" onChange={handleChange} />
                    <span className="gender-title">Gender</span>
                    <div className="category">
                        <label htmlFor="dot-1">
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>
                        <label htmlFor="dot-2">
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>
                        <label htmlFor="dot-3">
                            <span className="dot three"></span>
                            <span className="gender">Other</span>
                        </label>
                     </div>
                    </div>
                    </div>

                    <div className="button">
                  <input type="submit" value="Save Details" />
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
            </div>
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
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
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