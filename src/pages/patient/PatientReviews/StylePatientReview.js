/* StyleDoctorReview.js */
import styled from 'styled-components';

const StyleDoctorReview = styled.div`
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }

    .doctor-profile {
        text-align: center;
        margin-bottom: 20px;
    }

    .doctor-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    .doctor-name {
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    label {
        font-size: 18px;
        color: #333;
    }

    textarea {
        width: 100%;
        height: 150px;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        resize: none;
    }

    button {
        padding: 10px 20px;
        font-size: 18px;
        background-color: #002750;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #3A89C9;
    }

    .rating-input {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .star-filled {
        color: #ffc107; /* Yellow color for filled stars */
        cursor: pointer;
    }

    .star-empty {
        color: #e4e5e9; /* Gray color for empty stars */
        cursor: pointer;
    }
`;

export default StyleDoctorReview;
