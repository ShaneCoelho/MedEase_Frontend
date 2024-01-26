import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StylePatientLogin from './StylePatientLogin'; 

const PatientSignup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    
    // Validate email address (contains @)
    const isValid = /\S+@\S+\.\S+/.test(newEmail);

    setEmail(newEmail);
    setIsValidEmail(isValid);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    
    // Validate password (at least 8 characters and at least one number)
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newPassword);

    setPassword(newPassword);
    setIsValidPassword(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both email and password are valid before submitting
    if (isValidEmail && isValidPassword) {
      // Perform your signup logic here
      console.log('Signup successful!');
    } else {
      console.log('Invalid email or password');
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
                onChange={handleEmailChange}
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

            {isValidEmail ? null : (
              <p className="email-error">Enter a valid email address</p>
            )}

            {isValidPassword ? null : (
              <p className="password-error">Password must be at least 8 characters and contain at least one number</p>
            )}

            <button type="submit" disabled={!isValidEmail || !isValidPassword}>
              {/* Use Link dynamically based on password validity */}
              {isValidEmail && isValidPassword ? (
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
