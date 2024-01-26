import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StylePatientDetails from "./StylePatientDetails";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { tokenValue } from "./TokenSlice";

const PatientDetails = () => {
    const [birthDate, setBirthDate] = useState(null);
    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
      };
    
    return (
        <div>
            
            <StylePatientDetails>
            <div className="ud-body">
                <div className="container">
                    <div className="title">Personal Details</div>
                    <div className="content">
                        <form action="#">
                            <ChangeProfilePhoto>
                            <label className="-label" htmlFor="file">
        <span className="glyphicon glyphicon-camera"></span>
        <span>Change Image</span>
      </label>
      <input id="file" type="file" onChange={loadFile} />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png"
        id="output"
        width="200"
        alt=""
      />
                            </ChangeProfilePhoto>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Description</span>
                                    <input type="text" placeholder="Enter your username" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Blood Group</span>
                                    <input type="text" placeholder="Enter your blood group" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Weight</span>
                                    <input type="text" placeholder="Enter your weight" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="text" placeholder="Enter your phone no" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Birth Date</span>
                                    <StyledDatePicker
                                        selected={birthDate}
                                        onChange={(date) => setBirthDate(date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Select your birth date"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={15}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <input type="radio" name="gender" id="dot-3" />
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
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Save Details" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StylePatientDetails>
            
        </div>
    )
}

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ChangeProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  transition: all 0.3s ease;
  position: relative;
  input {
    display: none;
  }
  img {
    position: absolute;
    object-fit: cover;
    width: 165px; /* Use actual size or dynamic calculation if needed */
    height: 165px; /* Use actual size or dynamic calculation if needed */
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    border-radius: 100px;
    z-index: 0;
  }
  .-label {
    cursor: pointer;
    height: 165px; /* Use actual size or dynamic calculation if needed */
    width: 165px; /* Use actual size or dynamic calculation if needed */
  }
  &:hover {
    .-label {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: rgb(250, 250, 250);
      transition: background-color 0.2s ease-in-out;
      border-radius: 100px;
      margin-bottom: 0;
    }
  }
  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
`;

export default PatientDetails;