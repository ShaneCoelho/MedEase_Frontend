import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyleSymptoms from './StyleSymptoms';
import axios from 'axios';
import hostURL from '../../../data/URL';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import SubHeader from '../../Shared/SubHeader';


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
            const response = await axios.post('https://medeasediseaseprediction.onrender.com/predict', {
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
        const filteredOptions =  ["Itching", "Skin Rash", "Nodal Skin Eruptions", "Continuous Sneezing", "Shivering", "Chills", "Joint Pain", "Stomach Pain", "Acidity", "Ulcers On Tongue", "Muscle Wasting", "Vomiting", "Burning Micturition", "Spotting Urination", "Fatigue", "Weight Gain", "Anxiety", "Cold Hands And Feets", "Mood Swings", "Weight Loss", "Restlessness", "Lethargy", "Patches In Throat", "Irregular Sugar Level", "Cough", "High Fever", "Sunken Eyes", "Breathlessness", "Sweating", "Dehydration", "Indigestion", "Headache", "Yellowish Skin", "Dark Urine", "Nausea", "Loss Of Appetite", "Pain Behind The Eyes", "Back Pain", "Constipation", "Abdominal Pain", "Diarrhoea", "Mild Fever", "Yellow Urine", "Yellowing Of Eyes", "Acute Liver Failure", "Fluid Overload", "Swelling Of Stomach", "Swelled Lymph Nodes", "Malaise", "Blurred And Distorted Vision", "Phlegm", "Throat Irritation", "Redness Of Eyes", "Sinus Pressure", "Runny Nose", "Congestion", "Chest Pain", "Weakness In Limbs", "Fast Heart Rate", "Pain During Bowel Movements", "Pain In Anal Region", "Bloody Stool", "Irritation In Anus", "Neck Pain", "Dizziness", "Cramps", "Bruising", "Obesity", "Swollen Legs", "Swollen Blood Vessels", "Puffy Face And Eyes", "Enlarged Thyroid", "Brittle Nails", "Swollen Extremeties", "Excessive Hunger", "Extra Marital Contacts", "Drying And Tingling Lips", "Slurred Speech", "Knee Pain", "Hip Joint Pain", "Muscle Weakness", "Stiff Neck", "Swelling Joints", "Movement Stiffness", "Spinning Movements", "Loss Of Balance", "Unsteadiness", "Weakness Of One Body Side", "Loss Of Smell", "Bladder Discomfort", "Foul Smell Of Urine", "Continuous Feel Of Urine", "Passage Of Gases", "Internal Itching", "Toxic Look (Typhos)", "Depression", "Irritability", "Muscle Pain", "Altered Sensorium", "Red Spots Over Body", "Belly Pain", "Abnormal Menstruation", "Dischromic Patches", "Watering From Eyes", "Increased Appetite", "Polyuria", "Family History", "Mucoid Sputum", "Rusty Sputum", "Lack Of Concentration", "Visual Disturbances", "Receiving Blood Transfusion", "Receiving Unsterile Injections", "Coma", "Stomach Bleeding", "Distention Of Abdomen", "History Of Alcohol Consumption", "Fluid Overload", "Blood In Sputum", "Prominent Veins On Calf", "Palpitations", "Painful Walking", "Pus Filled Pimples", "Blackheads", "Scurring", "Skin Peeling", "Silver Like Dusting", "Small Dents In Nails", "Inflammatory Nails", "Blister", "Red Sore Around Nose", "Yellow Crust Ooze"]  .filter(option =>
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
        <SubHeader title="Prediction" subtitle="Decode your symptoms, unlock peace of mind: Let us predict the unseen, guide your health journey."/>
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
