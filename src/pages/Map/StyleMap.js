import styled from "styled-components";

const StyleMap = styled.section`
  .container {
  height: 100%; /* Adjust height as needed */
  width: 100%; /* Adjust width as needed */
  margin-top:30px;
  margin-bottom:30px;
}

button {
  margin: 10px 0;
  position:relative;
  padding: 8px 16px;
  background-color: #007bff; /* Blue color, adjust as needed */
  color: #fff; /* White color for text */
  border: none;
  border-radius: 15px;
  margin-bottom:600px;
  cursor: pointer;
  z-index: 1000;
  top: 20;
  left: 90px;
  right: 10;
  width: 10rem;
  min-height: 1.5rem;
  
  
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover, adjust as needed */
  
}

.leaflet-popup-content-wrapper {
  background-color: #fff; /* White background for popup */
  color: #000; /* Black text color */
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Box shadow for popup */
}

.leaflet-popup-content {
  margin: 8px;
}

.leaflet-popup-tip-container {
  width: 40px; /* Adjust as needed */
  height: 20px; /* Adjust as needed */
}

.leaflet-popup-tip {
  background: transparent;
  border: none;
}


`;

export default StyleMap;
