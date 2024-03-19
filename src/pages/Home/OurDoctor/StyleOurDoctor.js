import styled from "styled-components";

const StylePatientAppoint = styled.section`
.doctors {
    background: #fff;
}

.doctors .member {
    position: relative;
    box-shadow: 0px 2px 15px rgba(44, 73, 100, 0.08);
    padding: 30px;
    border-radius: 10px;
}

.doctors .member .pic {
    overflow: hidden;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-right: 20px; /* Added margin to create space between image and info */
}

.doctors .member .pic img {
    transition: ease-in-out 0.3s;
    object-position: top;
    width: 100%; /* Added to ensure image fills the circular container */
    height: 100%; /* Added to ensure image fills the circular container */
    object-fit: cover; /* Added to prevent distortion of images */
}

.doctors .member:hover img {
    transform: scale(1.1);
}

.doctors .member .member-info {
    padding-left: 30px;
}

.doctors .member h4 {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #2c4964;
}

.doctors .member span {
    display: block;
    font-size: 15px;
    padding-bottom: 10px;
    position: relative;
    font-weight: 500;
}

.doctors .member span::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 1px;
    background: #b2c8dd;
    bottom: 0;
    left: 0;
}

.doctors .member p {
    margin: 10px 0 0 0;
    font-size: 14px;
}

.doctors .member .social {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.doctors .member .social a {
    transition: ease-in-out 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 32px;
    height: 32px;
    background: #a0bcd5;
}

.doctors .member .social a .icon {
    color: #fff;
    font-size: 16px;
    margin: 0 2px;
}

.doctors .member .social a:hover {
    background: #1977cc;
}

.doctors .member .social a+a {
    margin-left: 8px;
}
`;

export default StylePatientAppoint;
