import styled from "styled-components";

const StyleSymptoms = styled.section`
  .disease-prediction-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 100px; /* Adjusted maximum width */
    margin: 0 auto;
    padding: 20px;
  }

  .left-section,
  .right-section {
    flex: 1;
  }

  .disease-prediction-title {
    font-size: 1.8em; /* Adjusted font size */
    margin-bottom: 20px;
    color: #1e90ff; /* Blue color theme */
  }

  .disease-prediction-symptoms,
  .disease-prediction-find-doctor {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Adjusted alignment */
    width: 100%;
    margin-bottom: 20px;
  }

  .disease-prediction-symptoms input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s ease; /* Smooth border color transition */
  }

  .disease-prediction-symptoms input:focus {
    border-color: #1e90ff; /* Blue color theme on focus */
  }

  .add-symptom-button {
    padding: 10px;
    background-color: #1e90ff; /* Blue color theme */
    color: white;
    border: none;
    border-radius: 50%; /* Circular button */
    cursor: pointer;
    width: 40px; /* Adjusted width */
    height: 40px; /* Adjusted height */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease; /* Smooth background color transition */
  }

  .add-symptom-button:hover {
    background-color: #007acc; /* Darker shade of blue on hover */
  }

  .disease-prediction-symptoms input,
  .add-symptom-button {
    flex: 1; /* Equal width for input and button */
  }

  .disease-prediction-symptoms input + .add-symptom-button {
    margin-top: 10px; /* Margin between input and button */
  }

  .disease-prediction-symptoms button,
  .disease-prediction-find-doctor button {
    padding: 10px 20px;
    background-color: #1e90ff; /* Blue color theme */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth background color transition */
  }

  .disease-prediction-symptoms button:hover,
  .disease-prediction-find-doctor button:hover {
    background-color: #007acc; /* Darker shade of blue on hover */
  }

  @media screen and (min-width: 600px) {
    .disease-prediction-container {
      align-items: stretch;
    }

    .disease-prediction-symptoms,
    .disease-prediction-find-doctor {
      flex-direction: row;
      justify-content: space-between;
      align-items: center; /* Center items horizontally */
    }

    .disease-prediction-symptoms input {
      width: auto;
      margin-bottom: 0;
    }

    .add-symptom-button {
      width: 50px; /* Adjusted width */
      height: 50px; /* Adjusted height */
    }
  }
`;

export default StyleSymptoms;
