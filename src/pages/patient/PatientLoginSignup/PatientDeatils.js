import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StylePatient from './StylePatient'; 

const PatientDetails = () => {
    return (
        <StylePatient>
            <div className="Pt-body">
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
                        </div>

                        <div className="input-box">
                            <label>Date of Birth:</label>
                            <input type="date" required/>
                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Blood Group" required/>
                            <FaUser className="icon" />
                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Weight" required/>
                            <FaUser className="icon" />
                        </div>

                        <div className="input-box">
                            <input type="text" placeholder="Enter Mobile No." required/>
                            <FaUser className="icon" />
                        </div>

                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </StylePatient>
    );
}

export default PatientDetails;
