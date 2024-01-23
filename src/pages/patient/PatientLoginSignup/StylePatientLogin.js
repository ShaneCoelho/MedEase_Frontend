import styled from "styled-components";

const StylePatientLogin = styled.section`
.Pt-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.wrapper {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
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
}

.input-box input {
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}

.icon,
.icon2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 18px;
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

/* Disable navigation back after signup */
button a {
  color: #fff;
  text-decoration: none;
}
`;
export default StylePatientLogin
