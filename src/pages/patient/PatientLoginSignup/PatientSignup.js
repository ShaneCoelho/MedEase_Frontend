import React, { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import StylePatientLogin from './StylePatientLogin';
import axios from 'axios';
import hostURL from '../../../data/URL'
import { setToken } from "../../../data/Token";

const PatientSignup = () => {
  const [signup, setSignUp] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const cookiename="token";
  //     document.cookie = `${cookiename}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  // }, []);

  const getUserSignUpData = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Validate password
    

    try {
      const response = await axios.post(hostURL.link + '/api/patient/auth/signup', signup);

      console.log('Response from server:', response.data.token);
      const value = response.data.token;
      setToken(value);

      navigate('/patient-details')
    } catch (error) {
      console.error('Error making API call:', error);
      if (signup.password.length < 8 || !/\d/.test(signup.password)) {
        alert("Password should be minimum 8 characters with at least 1 number");
        return;
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(signup.email)) {
        alert("Invalid email address");
        return;
      }

      if (error.response && error.response.status === 409) {
        alert('Username is already taken. Please choose a different username.');
      } else {
        alert('An error occurred. Please try again later.');
      }
      
    }finally {
      setLoading(false);
    }
  };

  return (
    <StylePatientLogin>
      <div className="Pt-body">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>

            <div className="input-box">
              <input
                type="email"
                placeholder="Enter email address"
                name="email"
                onChange={getUserSignUpData}
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter new Username"
                name="username"
                onChange={getUserSignUpData}
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter new Password"
                name="password"
                onChange={getUserSignUpData}
                required
              />
              <FaLock className="icon2" />
            </div>

            <button type="submit" className={loading ? 'loading' : ''} disabled={loading}>
                            {loading && <div className="spinner"></div>} {/* Render spinner if loading */}
                            {!loading && 'Submit'} {/* Render 'Login' text if not loading */}
                        </button>
          </form>
        </div>
      </div>
    </StylePatientLogin>
  );
}

export default PatientSignup;
