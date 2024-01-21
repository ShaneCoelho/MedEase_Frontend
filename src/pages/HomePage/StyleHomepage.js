import styled from "styled-components";

const StyleHomepage = styled.section`
.hm-body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: url('../../assets/Doctor/Home.jpg');
    background-size: cover;
}
  .App {
    text-align: center;
  }
  
  .home-container {
    max-width: 800px;
    margin: 50px auto;
    border: 3px solid #050046;
    padding: 40px; /* Increased padding for more spacious modules */
    background-color: #ffffff00;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .module-container {
    display: flex;
    flex-wrap: wrap; /* Allow modules to wrap to the next line on smaller screens */
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .module {
    flex: 1; /* Each module takes equal space */
    margin: 10px;
    text-align: center;
    padding: 30px;
    border: 3px solid #050046;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: hsla(218, 100%, 81%, 0); /* White background */
    transition: transform 0.3s ease-in-out;
  }
  
  .module:hover {
    transform: scale(1.05);
  }
  
  .module h2 {
    color: #333;
  }
  
  .module p {
    color: #666;
    margin-bottom: 20px;
  }
  
  .module a {
    display: inline-block;
    padding: 10px 15px;
    background-image: './components/Background/Home.jpg';
    background-color: #002750; /* Primary blue color */
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease-in-out;
  }
  
  .module a:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

export default StyleHomepage;