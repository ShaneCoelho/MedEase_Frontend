import styled from "styled-components";

const StyleMap = styled.section`

.filter-container {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
  
  /* Adjustments for responsiveness */
  @media only screen and (max-width: 600px) {
    .filter-container {
      top: 10px;
      left: 10px;
      padding: 5px;
    }
  }
  

`;
export default StyleMap