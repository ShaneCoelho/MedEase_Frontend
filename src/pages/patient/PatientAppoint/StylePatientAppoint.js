import styled from "styled-components";

const StylePatientAppoint = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .title {
    font-size: 25px;
    font-weight: 500;
    position: relative;
    margin-bottom: 20px;
  }

  .title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }

  .content {
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  }

  .input-box {
    width: calc(50% - 10px);
    margin-bottom: 15px;
  }
  .input-box select {
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    background-color: #fff;
  }
  
  .input-box select:focus {
    border-color: #9b59b6;
  }

  .input-box-2 input {
    margin-top: 0.7rem;
    margin-bottom: 10px;
    margin-left: 40px;
    display: flex;
    align-items: center;
  }

  .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .input-box input,
  .input-box textarea {
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    background-color: #fff;
  }

  .input-box input:focus,
  .input-box input:valid,
  .input-box textarea:focus,
  .input-box textarea:valid {
    border-color: #9b59b6;
  }

  .gender-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
  }

  .gender-title {
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
  }

  .category {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .category label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
  }

  .dot {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
  }

  #dot-1:checked ~ .category label .one,
  #dot-2:checked ~ .category label .two,
  #dot-3:checked ~ .category label .three {
    background: #9b59b6;
    border-color: #d9d9d9;
  }

  input[type="radio"] {
    display: none;
  }

  .button {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .button input {
    height: 60%;
    width: 30%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #1977cc;
    outline: none;
  }

  .button input:hover {
    background: #1977cc;
  }

  .reviews-section {
    margin-top: 40px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  .reviews-section h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .review-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .review-item p {
    margin: 5px 0;
  }

  .add-review {
    margin-top: 25px;
  }

  @media (max-width: 760px) {
    .input-box {
      width: 100%;
    }
    .button input {
      width: 100%;
    }
  }
`;

export default StylePatientAppoint;
