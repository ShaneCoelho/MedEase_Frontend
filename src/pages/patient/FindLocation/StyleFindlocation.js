import styled from "styled-components";

const StyleFindlocation = styled.section`
  display: flex;
  justify-content: space-between;

  .map-container {
    height: 70%;/* Adjust height as needed */
    width: 50%;/* Adjust width as needed */
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto; /* Shift container to the right */
    margin-right: 25px; /* Reset right margin */
  }

  .specialization-container {
    width: 20%;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: -10px;
  }

  button {
    margin: 10px 0;
    position: relative;
    padding: 8px 16px;
    background-color: #002750; /* Blue color, adjust as needed */
    color: #fff; /* White color for text */
    border: none;
    border-radius: 15px;
    margin-bottom: 600px;
    cursor: pointer;
    z-index: 1000;
    top: 20;
    left: 300px;
    width: 10rem;
    min-height: 1.5rem;
  }

  button:hover {
    background-color: #0056b3;
  }

  .leaflet-popup-content-wrapper {
    background-color: #fff;
    color: #000;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .leaflet-popup-content {
    margin: 8px;
  }

  .leaflet-popup-tip-container {
    width: 20px;
    height: 10px;
  }

  .leaflet-popup-tip {
    background: transparent;
    border: none;
  }
`;

export default StyleFindlocation;
