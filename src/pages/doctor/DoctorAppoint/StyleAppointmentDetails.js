import styled from "styled-components";

const StyleAppointmentDetails = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .details {
    margin-bottom: 20px;
  }

  .details p {
    margin-bottom: 10px;
  }

  .time-slot {
    margin-bottom: 20px;
  }

  .time-slot h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .time-slot input[type="datetime-local"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
  }

  .buttons {
    text-align: center;
  }

  .buttons button {
    background-color: #1977cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 80px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease;
  }

  .buttons button:hover {
    background-color: #3291e6;
  }

  @media (max-width: 768px) {
    .container {
      padding: 75px;
    }

    .title {
      font-size: 20px;
    }

    .details p {
      font-size: 14px;
    }

    .time-slot h2 {
      font-size: 18px;
    }

    .time-slot input[type="datetime-local"] {
      font-size: 14px;
    }

    .buttons button {
      font-size: 15px;
      margin-bottom: 5px;
      padding: 17px 17px 17px 17px;
    }
  }
  .container {
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
`;

export default StyleAppointmentDetails;
