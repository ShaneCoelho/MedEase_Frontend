import styled from "styled-components";

const StyleMap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set height of container to full viewport height */

  .container {
    position: relative;
    width: 90%; /* Set width to 90% of viewport width */
    max-width: 35rem; /* Set maximum width to 35rem */
    height: 22rem;
    text-align: center;
  }

  .map {
    width: 100% !important;
    height: 100% !important;
  }

  .find_location {
    position: absolute;
    margin: auto;
    width: 12rem;
    min-height: 2.5rem;
    font-size: 1rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    cursor: pointer;
    border-radius: 0 0 1rem 1rem;
    border: none;
    border-top: 1px solid lightgrey;
  }

  .find_location:hover {
    background-color: whitesmoke;
  }

  @media (max-width: 768px) {
    .container {
      width: 90%; /* Adjust width for smaller screens */
    }
  }
`;

export default StyleMap;
