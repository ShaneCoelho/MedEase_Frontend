import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StylePatient from './StylePatient'; 


const PatientLogin = () => {
    return (
        <StylePatient>
        <div className="Pt-body">
        <div className="wrapper">
            <form action="">
                <h1>Signup</h1>
                
                <div className="input-box">
                    <input type="text" placeholder="Enter First Name" required/>
                    <FaUser className="icon" />
                 </div>   
                 <div className="input-box">
                    <input type="text" placeholder="Enter Last Name" required/>
                    <FaUser className="icon" />
                 </div>  
                <div className="input-box">
                    <input type="text" placeholder="Enter new Username" required/>
                    <FaUser className="icon" />

                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter new Password" required/>
                    <FaLock className="icon2" />


                </div>
                <button type="submit">Login</button>

            </form>
        </div>
        </div>
        </StylePatient>
    );
}

export default PatientLogin;