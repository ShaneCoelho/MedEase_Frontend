import styled from "styled-components";

const StyleTrackAppoint = styled.section`
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

  @media (max-width: 768px) {
    .input-box {
      width: 100%;
    }
    .button input {
      width: 100%;
    }
  }
`;

export default StyleTrackAppoint;
