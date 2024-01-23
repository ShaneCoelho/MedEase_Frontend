import styled from "styled-components";

const StylePatientDetails = styled.section`
/* StylePatientDetails.css */

.Pd-body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
}

.wrapper {
  text-align: center;
  width: 410px;
  background: rgba(255, 255, 255, 0.8);
  color: #050046;
  border-radius: 40px;
  padding: 65px 26px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.wrapper:hover {
  transform: scale(1.05);
}

.wrapper h1 {
  font-size: 36px;
  text-align: center;
  color: #050046;
}


form {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-box {
  position: relative;
  margin-bottom: 20px;
  color: navy;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 40px;
}

.input-box input,
.input-box select {
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 18px;
  color: #555;
}

.input-box label {
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
}

button {
  background: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 auto;
}

/* Responsive Styles */
@media screen and (max-width: 600px) {
  .wrapper {
    max-width: 90%;
  }
}

`;

export default StylePatientDetails;
