import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import StylePatientLogin from './StylePatientLogin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../../data/URL'
import { setToken } from "../../../data/Token";


const PatientLogin = () => {
    const [login, setLogIn] = useState({});
    const navigate = useNavigate();

    const getUserLogInData = (e) => {
        setLogIn({ ...login, [e.target.name]: e.target.value });
    };

    const handleLogInSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(URL.link + '/api/patient/auth/signin', login);

            console.log('Response from server:', response.data.token);
            const value = response.data.token;
            setToken(value);

            console.log("Successfully Logged INnn")
        } catch (error) {
            console.error('Error making API call:', error);

            if (error.response && error.response.status === 401) {
                alert('Invalid Credentials');
            } else {
                alert('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <StylePatientLogin>
            <div className="Pt-body">
                <div className="wrapper">
                    <form onSubmit={handleLogInSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" onChange={getUserLogInData} required />
                            <FaUser className="icon" />

                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" onChange={getUserLogInData} required />
                            <FaLock className="icon2" />
                        </div>

                        <button type="submit">Login</button>

                    </form>
                </div>
            </div>
        </StylePatientLogin>
    );
}

export default PatientLogin;