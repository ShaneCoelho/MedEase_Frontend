import styled from "styled-components";

const StylePatientPopup = styled.div`
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
    position: relative;
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .details {
    margin-bottom: 10px;
    padding:10px 10px;
  }

  .details p {
    margin-top:10px;
    margin-bottom: 10px;
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
    display: none; /* Hide the button */
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

    .buttons button {
      font-size: 15px;
      margin-bottom: 5px;
      padding: 17px 17px 17px 17px;
    }
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

export default StylePatientPopup;
