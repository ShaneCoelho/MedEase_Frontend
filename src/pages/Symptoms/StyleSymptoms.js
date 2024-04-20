import styled from "styled-components";
import img from '../../images/Home.jpg';

const StyleSymptoms = styled.section`
.body {
  font-family: Arial, sans-serif;
  margin: 10;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  background-image: url(${img});
}

.container {
  display: flex;
  max-width: 1300px;
  width: 100%;
  height: 60vh;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0.5, 0.9);
}

.button {
  background-color: #002750;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #004181;
}

.left-section {
  width: 40%;
  border: 1px solid #ddd;
  padding: 20px;
  margin-right: 20px;
  transition: background-color 0.3s ease;
}

.right-section {
  width: 50%;
  border: 1px solid #ddd;
  padding: 20px;
  margin-left: 20px;
  transition: background-color 0.3s ease;
}

.symptom-input {
  width: calc(100% - 20px);
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  transition: border-color 0.3s ease;
}

.symptom-input:focus {
  border-color: #5c96f3;
}

.disease-prediction {
  font-weight: bold;
  margin-bottom: 20px;
}

disease-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.disease-label {
  font-weight: bold;
  margin-right: 20px;
  justify-self: flex-end; /* Align the Disease label to the right */
}

.disease-value {
  font-size: 18px;
  color: #333;
}

.font-size-btn {
  background-color: #002750;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s ease;
}

.font-size-btn:hover {
  background-color: #004181;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
  }

  .left-section,
  .right-section {
    width: 100%;
    margin: 0;
  }

  .right-section {
    margin-top: 20px;
  }
}

`;

export default StyleSymptoms;
