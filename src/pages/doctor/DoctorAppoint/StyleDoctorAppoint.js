import styled from "styled-components";
const StyleDoctorAppoint = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
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
`;

export default StyleDoctorAppoint;

