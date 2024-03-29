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
          <img src={patient.Patient_Avatar} alt={patient.patient_name} className="profile-photo" />
          <p><strong>Name:</strong> {patient.patient_name}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Date of Birth:</strong> {patient.birthdate}</p>
          <p><strong>Blood Group:</strong> {patient.bloodgroup}</p>
          <p><strong>Weight:</strong> {patient.weight}</p>
          <p><strong>Mobile Number:</strong> {patient.mobno}</p>
        </div>
      </div>
    </StylePatientPopup>
  );
};

export default PatientPopup;
