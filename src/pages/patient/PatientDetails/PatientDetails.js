import React from "react";
import { FaUser, FaBirthdayCake, FaVenusMars, FaTint, FaWeight, FaMobileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StylePatient from '../PatientLoginSignup/StylePatientLogin'; 
import StylePatientDetails from "./StylePatientDetails";

const PatientDetails = () => {
    return (
        <StylePatientDetails>
            <div className="Pd-body">
                <div className="wrapper">
                    <form action="">
                        <h1>Patient Details</h1>

                        <div className="input-box">

                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Full Name" required/>
                            <FaUser className="icon" />
                        </div>

                        <div className="input-box">
                            <select required>
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                {/* Add more options as needed */}
                            </select>
                            <FaVenusMars className="icon" />
                        </div>

                        <div className="input-box">
                            <label>Date of Birth:</label>
                            <input type="date" required/>
                            <FaBirthdayCake className="icon" />
                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Blood Group" required/>
                            <FaTint className="icon" />
                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Weight" required/>
                            <FaWeight className="icon" />
                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Mobile No." required/>
                            <FaMobileAlt className="icon" />
                        </div>

                    

                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </StylePatientDetails>
    );
}

export default PatientDetails;
