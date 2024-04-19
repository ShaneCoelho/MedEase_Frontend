/* styles.css */
import styled from "styled-components";

const Stylenav = styled.section`
.navbar {
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  .navbar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .navbar ul li {
    display: inline;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .navbar ul li.active {
    font-weight: bold;
    text-decoration: underline;
  }
  
  .container {
    margin: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .appointment-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .appointment-item {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    width: calc(33.33% - 20px);
    box-sizing: border-box;
  }
  
  .appointment-item .profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .appointment-info h2 {
    margin: 0;
  }
  
  .appointment-info p {
    margin: 5px 0;
  }
  
  .appointment-info button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .appointment-info button:hover {
    background-color: #0056b3;
  }
  
  `
  export default Stylenav;