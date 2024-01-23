import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StylePatientDetails from "./StylePatientDetails";
import styled from "styled-components";
import ChangeProfilePhoto from "./ChangeProfilePhoto";
import { useSelector } from 'react-redux';
import { tokenValue } from "./TokenSlice";

const PatientDetails = () => {
    const [birthDate, setBirthDate] = useState(null);
    
    return (
        <div>
            
            <StylePatientDetails>
            <div className="ud-body">
                <div className="container">
                    <div className="title">Personal Details</div>
                    <div className="content">
                        <form action="#">
                            <ChangeProfilePhoto />
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

export default PatientDetails;