import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StylePatientDetails from "./StylePatientDetails";
import styled from "styled-components";
import WentWrong from '../../WentWrong/WentWrong'
import { getToken } from "../../../data/Token";
import hostURL from '../../../data/URL'
import { useNavigate } from 'react-router-dom';


const PatientDetails = () => {
    const [birthDate, setBirthDate] = useState(null);
    const [formDetails, setFormDetails] = useState({});
    const [profilePicture, setProfilePicture] = useState(null);
    const [hasToken, setHasToken] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    useEffect(() => {
        // Function to check if the "token" cookie is present
        const checkTokenCookie = () => {
            const retrivedToken = getToken('token');
            setHasToken(!!retrivedToken); // Set hasToken to true if token exists, false otherwise
            setToken(retrivedToken);
        };

        checkTokenCookie();
    }, []);


    const handleInputChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };


    var loadFile = function (event) {
        var image = document.getElementById('output');
        const file = event.target.files[0];
        image.src = URL.createObjectURL(file);
        setProfilePicture(file);
    };


    const handleFormDetailsSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form is submitted

        // Convert birthdate to "dd-mm-yyyy" format
        const formattedBirthdate = birthDate.toLocaleDateString('en-GB');

        const updatedFormDetails = { ...formDetails, birthdate: formattedBirthdate };

        const formData = new FormData();
        
        formData.append('profile', profilePicture);
        formData.append('data', JSON.stringify(updatedFormDetails));

        try {
            const response = await fetch(hostURL.link + '/api/patient/details/adddetails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            // Check if the response is successful (status code 2xx)
            if (response.ok) {
                alert("Successfully submitted");
                navigate('/home'); // Redirect to home page
            } else {
                console.error('Failed to submit form. Server returned:', response.status, response.statusText);
                alert("Something went wrong" + response.status);
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        } finally {
            setLoading(false); // Set loading to false after form submission
        }
    };

    return (
        <div>
            {hasToken ? (
                <StylePatientDetails>
                    <div className="ud-body">
                        <div className="container">
                            <div className="title">Personal Details</div>
                            <div className="content">
                                <form onSubmit={handleFormDetailsSubmit}>
                                    <ChangeProfilePhoto>
                                        <label className="-label" htmlFor="file">
                                            <span className="glyphicon glyphicon-camera"></span>
                                            <span>Change Image</span>
                                        </label>
                                        <input id="file" type="file" onChange={loadFile} />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png"
                                            id="output"
                                            width="200"
                                            alt=""
                                        />
                                    </ChangeProfilePhoto>
                                    <div className="user-details">
                                        <div className="input-box">
                                            <span className="details">Full Name</span>
                                            <input type="text" name="name" placeholder="Enter your name" onChange={handleInputChange} required />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Blood Group</span>
                                            <input type="text" name="bloodgroup" placeholder="Enter your blood group" onChange={handleInputChange} required />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Weight</span>
                                            <input type="text" name="weight" placeholder="Enter your weight" onChange={handleInputChange} required />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Phone Number</span>
                                            <input type="text" name="mobno" placeholder="Enter your phone no" onChange={handleInputChange} required />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Birth Date</span>
                                            <StyledDatePicker
                                                selected={birthDate}
                                                onChange={(date) => setBirthDate(date)}
                                                dateFormat="yyyy-MM-dd"
                                                placeholderText="Select your birth date"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={15}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="gender-details">
                                        <input type="radio" name="gender" id="dot-1" value="Male" checked={formDetails.gender === 'Male'} onChange={handleInputChange} />
                                        <input type="radio" name="gender" id="dot-2" value="Female" checked={formDetails.gender === 'Female'} onChange={handleInputChange} />
                                        <input type="radio" name="gender" id="dot-3" value="Prefer not to say" checked={formDetails.gender === 'Prefer not to say'} onChange={handleInputChange} />
                                        <span className="gender-title">Gender</span>
                                        <div className="category">
                                            <label htmlFor="dot-1">
                                                <span className="dot one"></span>
                                                <span className="gender">Male</span>
                                            </label>
                                            <label htmlFor="dot-2">
                                                <span className="dot two"></span>
                                                <span className="gender">Female</span>
                                            </label>
                                            <label htmlFor="dot-3">
                                                <span className="dot three"></span>
                                                <span className="gender">Prefer not to say</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <input type="submit" value={loading ? "Saving..." : "Save Details"} disabled={loading} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </StylePatientDetails>
            ) : (
                <WentWrong />
            )}
        </div>
    )
}

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ChangeProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  transition: all 0.3s ease;
  position: relative;
  input {
    display: none;
  }
  img {
    position: absolute;
    object-fit: cover;
    width: 165px; /* Use actual size or dynamic calculation if needed */
    height: 165px; /* Use actual size or dynamic calculation if needed */
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    border-radius: 100px;
    z-index: 0;
  }
  .-label {
    cursor: pointer;
    height: 165px; /* Use actual size or dynamic calculation if needed */
    width: 165px; /* Use actual size or dynamic calculation if needed */
  }
  &:hover {
    .-label {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: rgb(250, 250, 250);
      transition: background-color 0.2s ease-in-out;
      border-radius: 100px;
      margin-bottom: 0;
    }
  }
  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
`;

export default PatientDetails;
