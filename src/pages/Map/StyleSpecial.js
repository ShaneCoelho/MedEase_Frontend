import styled from "styled-components";

const StyleSpecial = styled.section`
.map-wrapper {
    display: flex;
  }
  
  .container {
    flex: 1;
    margin-right: 20px;
    margin-left: auto; /* Shift container to the right */
    margin-right: 1px;  /* Add spacing between map and Special component */
  }  


.special-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .special-input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .special-list {
    max-height: 200px;
    overflow-y: auto;
  }
  
  .special-item {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
  
  .special-item:last-child {
    border-bottom: none;
  }
  `;

export default StyleSpecial;