import styled from "styled-components";

const StyleDoctorAppoint = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .past-appointments-container {
    max-width: 801px;
    margin: 0 auto;
    padding: 20px;
  }

  .date-filter{
    margin-top:10px;
    margin-bottom:15px;
  }

  .title2{
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: center;
  }

  .card {
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display:flex;
    padding: 20px;
    width: 800px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-body {
    margin-top: 10px;
  }

  .card h3 {
    margin: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .patient-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .patient-item {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    align-items: center;
  }

  .profile-photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .patient-info h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .options button {
    background-color: #1977cc;
    color: #fff;
    border: none;
    margin-bottom: 7px;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 15px;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease;
  }

  .options button:hover {
    background-color: #3291e6;
  }

  .toggle-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top:30px;
  }
  
    
  .toggle-container button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  
  .toggle-container button.active {
    background-color: #1977cc;
    color: #fff;
  }
  
  .toggle-container button:not(.active):hover {
    background-color: #f0f0f0;
    color: #333;
  }
  
  media only screen and (max-width: 768px) {
    .patient-list {
      grid-template-columns: repeat( minmax(200px, 1fr));
    }
  }

  @media only screen and (max-width: 500px) {
    .patient-list {
      grid-template-columns: repeat( minmax(150px, 1fr));
    }
  }
`;

export default StyleDoctorAppoint;
