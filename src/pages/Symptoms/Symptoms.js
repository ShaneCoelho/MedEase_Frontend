import React, { useState } from 'react';
import StyleSymptoms from './StyleSymptoms';

const Symptoms = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  // Function to handle adding symptoms
  const handleAddSymptom = (symptom) => {
    setSymptoms([...symptoms, symptom]);
  };

  // Function to handle selecting specialization
  const handleSelectSpecialization = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  // Dummy loading animation
  const LoadingAnimation = () => {
    return <div>Loading...</div>;
  };

  // Dummy disease prediction and doctor's specialization
  const disease = "Dummy Disease";
  const doctorSpecialization = "Dummy Specialization";

  return (
    <StyleSymptoms>
      <div className="disease-prediction-container">
        {/* Left side */}
        <div className="left-section">
          <div className="disease-prediction-symptoms">
            <h2>Add symptoms </h2>
            <input type="text" placeholder="Input Symptom" />
            <button className="add-symptom-button" onClick={() => handleAddSymptom("Dummy Symptom")}>+</button>
          </div>
        </div>

        {/* Right side */}
        <div className="right-section">
          <div className="disease-prediction-title">Disease Prediction</div>
          {/* Loading animation */}
          <LoadingAnimation />

          {/* Display disease */}
          <div>Disease: {disease}</div>

          {/* Display doctor's specialization */}
          <div className="disease-prediction-find-doctor">
            <select value={selectedSpecialization} onChange={handleSelectSpecialization}>
              <option value="specialization">Specialization</option>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="neurology">Neurology</option>
            </select>
            <button>Find Doctor</button>
          </div>
          <div>Doctor's Specialization: {doctorSpecialization}</div>
        </div>
      </div>
    </StyleSymptoms>
  );
};

export default Symptoms;
