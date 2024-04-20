import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import StyleSymptoms from './StyleSymptoms';

const Symptoms = () => {
    const [symptoms, setSymptoms] = useState(['Fever']); // Initial symptom
    const [disease, setDisease] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [loading, setLoading] = useState(false); // State for loading animation
    const navigate = useNavigate(); // Hook to navigate to another page

    const handleInputChange = (e, index) => {
        const updatedSymptoms = [...symptoms];
        updatedSymptoms[index] = e.target.value;
        setSymptoms(updatedSymptoms);
    };

    const handleDelete = (index) => {
        const updatedSymptoms = [...symptoms];
        updatedSymptoms.splice(index, 1);
        setSymptoms(updatedSymptoms);
    };

    const addSymptom = () => {
        setSymptoms([...symptoms, '']);
    };

    const handleSubmit = () => {
        // Perform logic for disease prediction based on symptoms
        // For now, let's just set some dummy values
        setLoading(true); // Start loading animation
        setTimeout(() => {
            setDisease('Viral Fever');
            setSpecialization('MBBS');
            setLoading(false); // Stop loading animation after some time (simulating data processing)
        }, 2000); // Simulated delay of 2 seconds
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSymptoms([...symptoms, inputValue]);
            setInputValue('');
        }
    };

    const handleInputChangeList = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        const filteredOptions = ['Fever', 'Cough', 'Headache','Nausea','bodyache'].filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredOptions(filteredOptions);
    };

    const handleOptionClick = (option) => {
        setSymptoms([...symptoms, option]);
        setInputValue('');
        setFilteredOptions([]);
    };

    const handleFindDoctor = () => {
        navigate('/find-doc'); // Navigate to '/find-doc' when "Find Doctor" button is clicked
    };

    return (
        <StyleSymptoms>
            <div className="body">
                <div className="container">
                    <div className="left-section">
                        <h2>Add Symptoms</h2>
                        {symptoms.map((symptom, index) => (
                            <div key={index} className="symptom-container">
                                <input
                                    className="symptom-input"
                                    placeholder="Enter your symptom here..."
                                    value={symptom}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                                <button className="delete-btn" onClick={() => handleDelete(index)}>x</button>
                            </div>
                        ))}
                        <input
                            className="symptom-input"
                            placeholder="Enter your symptom here..."
                            value={inputValue}
                            onChange={handleInputChangeList}
                            onKeyDown={handleInputKeyDown}
                        />
                        <ul className="options-list">
                            {filteredOptions.map((option, index) => (
                                <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
                            ))}
                        </ul>
                        <button className="button" onClick={addSymptom}>+ Add Symptom</button>
                        <button className="button" type="button" onClick={handleSubmit}>
                            {loading ? 'Loading....' : 'Submit'}
                        </button>
                    </div>

                    <div className="right-section">
                        <h2 className="disease-prediction">Disease Prediction</h2>
                        <div className="disease-info">
                            <span>Disease:</span>
                            <span>{disease}</span>
                        </div>
                        <div className="disease-info">
                            <span>Specialization:</span>
                            <span>{specialization}</span>
                        </div>
                        <button className="button" onClick={handleFindDoctor}>Find Doctor</button>
                    </div>
                </div>
            </div>
        </StyleSymptoms>
    );
};

export default Symptoms;
