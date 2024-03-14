import React, { useState, useEffect } from 'react';
import hostURL from '../../../data/URL';
import { getToken } from "../../../data/Token";
import styled from "styled-components";
import StylePatientPopup from './StylePatientPopup';

const PatientPopup = ({ patient, onClose }) => {

    const dummyPatient = {
        avatar: "https://via.placeholder.com/150",
        name: "John Doe",
        gender: "Male",
        dob: "1990-01-01",
        bloodGroup: "O+",
        weight: "70 kg",
        mobile: "1234567890"
      };
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkTokenCookie = () => {
      const retrievedToken = getToken('token');
      setHasToken(!!retrievedToken);
      setToken(retrievedToken);
    };

    checkTokenCookie();
  }, [token]);

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <StylePatientPopup>
      <div className="container">
        <div className="title">Patient Information</div>
        <button className="close-btn" onClick={handleClose}>X</button>
        <div className="details">
          <img src={dummyPatient.avatar} alt={dummyPatient.name} className="profile-photo" />
          <p><strong>Name:</strong> {dummyPatient.name}</p>
          <p><strong>Gender:</strong> {dummyPatient.gender}</p>
          <p><strong>Date of Birth:</strong> {dummyPatient.dob}</p>
          <p><strong>Blood Group:</strong> {dummyPatient.bloodGroup}</p>
          <p><strong>Weight:</strong> {dummyPatient.weight}</p>
          <p><strong>Mobile Number:</strong> {dummyPatient.mobile}</p>
        </div>
      </div>
    </StylePatientPopup>
  );
};

export default PatientPopup;
