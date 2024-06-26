import styled from "styled-components";

const StyleFindDoc = styled.section`
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
    width: 40%;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 90px;
    margin-right: -80px;
  }

  .find-location-button {
    margin: 20px 0;
    position: relative;
    padding: 8px 16px;
    background-color: #002750; /* Blue color, adjust as needed */
    color: #fff; /* White color for text */
    border: none;
    border-radius: 15px;
    margin-bottom: 600px;
    cursor: pointer;
    z-index: 400;
    top: 20;
    left: 10px;
    width: 10rem;
    min-height: 1.5rem;
  }

  .find-location-button:hover {
    background-color: #0056b3;
  }

.find-doctor-button {
    /* Define styles for the alternate button */
    margin: 10px 0;
    p.sition: relative;
    padding: 8px 16px;
    color: #fff;
    background-color: #002750; /* Blue color, adjust as needed */
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 10rem;
    top: 550px;
    margin-top:45px;
    margin-left:-300px;
    margin-right:90px;
    width: 10rem;
    height: 2.5rem;
  }
  
 .find-doctor-button:hover {
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
  /* Custom CSS for Leaflet zoom controls */
.leaflet-control-zoom-in,
.leaflet-control-zoom-out {

}

/* Hover effect for Leaflet zoom controls */
.leaflet-control-zoom-in:hover,
.leaflet-control-zoom-out:hover {
  background-color: #0056b3;
}
.leaflet-controls-container {
  position: relative; /* Ensure the container establishes a stacking context */
  z-index: 100; /* Adjust this value as needed */
}
.leaflet-top {
  z-index: 400;
  top:75px; /* Ensure Leaflet controls are below the buttons */
}
`;

export default StyleFindDoc;
