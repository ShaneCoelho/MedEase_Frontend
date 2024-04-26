import styled from "styled-components";


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
  
.container {
  display: flex;
  max-width: 1300px;
  width: 100%;
  height: 60vh;
  border-radius: 10px;
  
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0.5, 0.9);
  background-size: cover;
  background: linear-gradient(135deg, #89a9cc, #002750);
  height: 80vh; /* Set a fixed height for the container #89b9ff #89a9cc*/
  

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
  width: 45%;
  padding: 20px;
  margin-right: 30px;
  margin-left: 30px;
  transition: background-color 0.3s ease;
  overflow-y: auto;
  scrollbar-color: #002750 transparent;
  border: 4px solid #ddd;
  border-radius: 10px;
}
.left-section h2 {
  color: #ffffff; /* Set the color of the header text to white */
}

.right-section {
  width: 50%;
  border: 4px solid #ddd;
  padding: 20px;
  margin-right: 30px;
  margin-left: 30px;
  transition: background-color 0.3s ease;
  border-radius: 10px;
}

.right-section h2 {
  color: #ffffff; /* Set the color of the header text to white */
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
  
  color: #ffffff; /* Set the color of the header text to white */

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
