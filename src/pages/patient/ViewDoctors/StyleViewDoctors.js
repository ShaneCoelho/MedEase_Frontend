import styled from "styled-components";

const StyleViewDoctors = styled.section`

/* Global Styles */
vd-body {
  font-family: 'Montserrat', sans-serif; /* Updated to use Montserrat font */
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Doctor Search Container Styles */
.doctor-search-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
}

/* Doctor List Styles */
.doctor-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.doctor-card {
    display: flex;
    flex-direction: column;
    align-items: center; /* Align items in the center horizontally */
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  /* Profile Picture Styles */
  .profile-picture {
    width: 150px; /* Adjust the width to your preference */
    height: 150px;
    object-fit: cover;
    border-radius: 50%; /* Make the profile picture circular */
    margin-bottom: 15px; /* Add some space below the profile picture */
  }
  
  /* Doctor Details Styles */
  .doctor-details {
    text-align: center;
  }

h2 {
  margin: 0;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif; /* Applying Montserrat font */
}

/* Book Appointment Button Styles */
button {
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif; /* Applying Montserrat font */
}

button:hover {
  background-color: #45a049;
}



/* Responsive Styles */
@media (max-width: 600px) {
  .doctor-list {
    grid-template-columns: 1fr;
  }
}
`;
export default StyleViewDoctors;
