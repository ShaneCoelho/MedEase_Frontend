import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyleSymptoms from './StyleSymptoms';
import axios from 'axios';
import hostURL from '../../data/URL';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import SubHeader from '../Shared/SubHeader';


const Symptoms = () => {
    const [symptoms, setSymptoms] = useState([]); // Initialize with an empty array
    const [prediction, setPrediction] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAdditionalInput, setShowAdditionalInput] = useState(false);
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true); // Initially set to true
    const navigate = useNavigate();

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
        setShowAdditionalInput(true);
        setIsPlaceholderVisible(true); // Once the "Add Symptom" button is clicked, hide the placeholder
    };

    const handleSubmit = async () => {

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                symptoms: symptoms
            });
            const { prediction, specialization } = response.data;
            setPrediction(prediction);
            setSpecialization(specialization);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
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
        const filteredOptions = ["Polyuria", "Increased Appetite", "Excessive Hunger", "Obesity", "Skin Rash", "Blurred And Distorted Vision", "Fatigue"].filter(option =>
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
        navigate('/find-doc');
    };

    return (
        <div>
        <Header />
        <SubHeader title="Reviews" subtitle="Trusted by patients, endorsed by results – our doctors exceed expectations." />
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
                        {showAdditionalInput && (
                            <input
                                className="symptom-input"
                                placeholder="Enter your symptom here..."
                                value={inputValue}
                                onChange={handleInputChangeList}
                                onKeyDown={handleInputKeyDown}
                            />
                        )}
                        {isPlaceholderVisible && !showAdditionalInput && ( // Render the placeholder if it's visible and no additional input box is shown
                            <input
                                className="symptom-input"
                                placeholder="Enter symptoms here..."
                                disabled // Disable the input to prevent user interaction
                            />
                        )}
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
                            <span className="disease-label">Disease:</span>
                            <span className="disease-value">{prediction}</span>
                        </div>
                        <div className="disease-info">
                            <span className="disease-label">Specialization:</span>
                            <span className="disease-value">{specialization}</span>
                        </div>
                        <button className="button" onClick={handleFindDoctor}>Find Doctor</button>
                    </div>
                </div>
            </div>
        </StyleSymptoms>
        <Footer/>
        </div>
    );
};

export default Symptoms;
