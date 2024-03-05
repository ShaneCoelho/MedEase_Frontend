import styled from "styled-components";
const StyleDoctorReviews = styled.section`

.doctor-review-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
}

form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

textarea, input[type="number"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
}

li div:first-child {
    font-weight: bold;
    margin-bottom: 5px;
}
`;

export default StyleDoctorReviews;
