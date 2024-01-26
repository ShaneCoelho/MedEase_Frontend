import styled from "styled-components";

const StyleWentWrong = styled.section`
.error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f8f8; /* Set background color as per your preference */
  }
  
  .error-content {
    text-align: center;
  }
  
  .error-content h1 {
    font-size: 2em;
    color: #ff4d4f; /* Set text color as per your preference */
  }
  
  .error-content img {
    margin-top: 20px; /* Adjust margin as needed */
    max-width: 100%; /* Ensure the image does not exceed its container width */
  }
`;

export default StyleWentWrong;