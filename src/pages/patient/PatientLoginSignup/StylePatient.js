import styled from "styled-components";

const StylePatient = styled.section`
  .Pt-body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/Doctor/Home.jpg') center/cover;
    color: #fff;
    font-family: 'Arial', sans-serif;
  }

  .wrapper {
    text-align: center;
    width: 80%;
    max-width: 450px;
    background: rgba(255, 255, 255, 0.8);
    color: #050046;
    border-radius: 30px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .wrapper:hover {
    transform: scale(1.02);
  }

  .wrapper h1 {
    font-size: 24px;
    text-align: center;
    color: #050046;
    margin-bottom: 20px; /* Added margin for better spacing */
  }

  .wrapper .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 15px auto;
    text-align: center;
  }

  .input-box input {
    width: 100%;
    height: 100%;
    background: rgba(220, 255, 255, 0.6);
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 25px;
    font-size: 15px;
    font-style: italic;
    color: navy;
    padding: 15px;
    box-sizing: border-box; /* Added box-sizing for consistent sizing */
  }

  .input-box input::placeholder {
    color: #050046;
  }

  .input-box .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    color: #050046;
  }

  .input-box .icon2 {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    color: #050046;
  }

  .gender-selection {
    display: flex;
    justify-content: space-around; /* Improved alignment for gender selection */
    margin: 15px 0;
  }

  .gender-selection select {
    flex: 1;
    height: 100%;
    background: rgba(220, 255, 255, 0.6);
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 25px;
    font-size: 15px;
    font-style: italic;
    color: navy;
    padding: 15px;
    box-sizing: border-box;
    margin-right: 10px; /* Added margin for better spacing between selects */
  }

  .wrapper button {
    width: 100%;
    height: 40px;
    background: #050046;
    border: none;
    outline: none;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .wrapper button:hover {
    background: #002750;
    transform: scale(1.05);
  }

  .wrapper .remember-forgot {
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin: 15px 0;
  }

  .wrapper .register-link {
    font-size: 14px;
    text-align: center;
    margin: 20px 0 15px;
  }

  .register-link p a {
    color: #27ae60;
    text-decoration: none;
    font-weight: 600;
  }

  .register-link p a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    .wrapper {
      width: 100%;
      padding: 15px;
    }

    .gender-selection {
      flex-direction: column; /* Stack gender selects in smaller screens */
      align-items: center; /* Center gender selects in smaller screens */
    }

    .gender-selection select {
      margin-bottom: 10px; /* Added margin for better spacing */
    }
  }
`;

export default StylePatient;
