import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StyleDoctorDetails from "./StyleDoctorDetails";
import styled from "styled-components";
import ChangeProfilePhoto from "./ChangeProfilePhoto";
import { useSelector } from 'react-redux';
import { tokenValue } from "./TokenSlice";

const DoctorDetails = () => {
    const [birthDate, setBirthDate] = useState(null);
    
    return (
        <div>
            
            <StyleDoctorDetails>
            <div className="dd-body">
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
                                    <span className="details">Address</span>
                                    <input type="text" placeholder="Enter your address" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">License number</span>
                                    <input type="text" placeholder="Enter your license number" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone number</span>
                                    <input type="text" placeholder="Enter your phone no." required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Specialization</span>
                                    <input type="text" placeholder="Enter your specialization" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Experience</span>
                                    <input type="text" placeholder="Enter your experience[years]" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Qualification</span>
                                    <input type="text" placeholder="Enter your qualification" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Medical University</span>
                                    <input type="text" placeholder="Enter your University name" required />
                                </div>
      
                                <div className="input-box">
                                    <span className="details">Government Id</span>
                                    <input type="text" placeholder="Enter your identification no." required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" placeholder="Enter your username" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="text" placeholder="Enter your new password" required />
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
        </StyleDoctorDetails>
            
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

export default DoctorDetails;