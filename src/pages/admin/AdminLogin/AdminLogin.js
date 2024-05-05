import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import StyleAdminLogin from './StyleAdminLogin';  // Assuming StyleAdminLogin is a styled-component
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import axios from 'axios';
import hostURL from '../../../data/URL'
import { setToken } from "../../../data/Token";

const AdminLogin = () => {

    const [login, setLogIn] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getUserLogInData = (e) => {
        setLogIn({ ...login, [e.target.name]: e.target.value });
    };

    const handleLogInSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(hostURL.link + '/api/admin/auth/signin', login);

            console.log('Response from server:', response.data.token);
            const value = response.data.token;
            setToken(value);

            console.log("Successfully Logged INnn");
            
            // Redirect to doctor-details page
            navigate('/doctor-details');

        } catch (error) {
            console.error('Error making API call:', error);

            if (error.response && error.response.status === 401) {
                alert('Invalid Credentials');
            } else {
                alert('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false); // Stop loading animation regardless of success or failure
        }
    };

    return (
        <StyleAdminLogin>
            <div className="ad-body">
                <div className="wrapper">
                    <form onSubmit={handleLogInSubmit}>
                        <h1>Admin Login</h1>
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" onChange={getUserLogInData} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" onChange={getUserLogInData} required /> {/* Change type to 'password' */}
                            <FaLock className="icon2" />
                        </div>

                        <button type="submit" className={loading ? 'loading' : ''} disabled={loading}>
                            {loading && <div className="spinner"></div>} {/* Render spinner if loading */}
                            {!loading && 'Login'} {/* Render 'Login' text if not loading */}
                        </button>

                    </form>
                </div>
            </div>
        </StyleAdminLogin>
    );
}

export default AdminLogin;
