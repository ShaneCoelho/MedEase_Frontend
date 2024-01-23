import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StylePatientLogin from './StylePatientLogin'; 

const PatientSignup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password (at least 8 characters and at least one number)
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newPassword);
    setIsValidPassword(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the password is valid before submitting
    if (isValidPassword) {
      // Perform your signup logic here
      console.log('Signup successful!');
    } else {
      console.log('Invalid password');
      // You may want to show an error message to the user
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
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter new Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter new Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <FaLock className={`icon2 ${isValidPassword ? '' : 'invalid'}`} />
            </div>

            {isValidPassword ? null : (
              <p className="password-error">Password must be at least 8 characters and contain at least one number</p>
            )}

            <button type="submit" disabled={!isValidPassword}>
              {/* Use Link dynamically based on password validity */}
              {isValidPassword ? (
                <Link to="/patient-details">Submit</Link>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </StylePatientLogin>
  );
}

export default PatientSignup;
