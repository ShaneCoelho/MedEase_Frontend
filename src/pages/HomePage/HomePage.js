// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the MedEase </h1>

      <div className="module-container">
        <div className="module">
          <h2>Patient Module</h2>
          <p>Login or sign up as a patient to manage your health records.</p>
          <Link to="/patient-login">Patient Login</Link>
          <Link to="/patient-signup">Patient Signup</Link>
        </div>

        <div className="module">
          <h2>Admin Module</h2>
          <p>Login as an admin to manage the overall application.</p>
          <Link to="/admin-login">Admin Login</Link>
        </div>

        <div className="module">
          <h2>Doctor Module</h2>
          <p>Login as a doctor to access patient information.</p>
          <Link to="/doctor-login">Doctor Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

