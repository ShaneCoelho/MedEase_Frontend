import styled from "styled-components";
const StyleContact = styled.section`

.info .icon {
    margin-top: 2px;
    font-size: 24px;
    color: #1977cc;
    padding: 8px;
    background: #d6e9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
}

.contact .info h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c4964;
}

.contact .info p {
    font-size: 16px;
    color: #4b7dab;
}

.contact .appointment-btn {
    border: none;
    background-color: #002750;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.contact .appointment-btn:hover {
    background-color: #3A89C9;
}

/* Additional styling for form input fields */
.contact input[type="text"],
.contact input[type="email"],
.contact textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;
}

.contact input[type="text"]:focus,
.contact input[type="email"]:focus,
.contact textarea:focus {
    border-color: #1977cc;
    outline: none;
}
`;

export default StyleContact;
