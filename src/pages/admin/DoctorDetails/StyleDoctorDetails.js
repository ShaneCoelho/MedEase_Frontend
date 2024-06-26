import styled from "styled-components";
import img from '../../../images/Home.jpg';

const StyleDoctorDetails = styled.section`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
  }

.dd-body {
    height: 180vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-image: url(${img});
    background-size: cover;
}

.container {
    max-width: 700px;
    width: 100%;
    border: 2px solid #1977cc;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
    font-size: 25px;
    font-weight: 500;
    position: relative;
}

.container .title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.content form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

form .input-box-2 {
    input {
        margin-top: 0.7rem;
        margin-bottom: 5px;
        margin-left: 40px;
      }
      
      input::file-selector-button {
        font-weight: bold;
        display: inline-block;
        margin-left: 0px;
        margin-top: 0px;
        color: black;
        background-color: linear-gradient(135deg, #71b7e6, #9b59b6);
        padding: 10px 30px;
        z-index: 1;
        text-decoration: none;
        border: 2px solid #ccc;
        border-radius: 20px;
        overflow:hidden;
        transition: color 1s, box-shadow 1s;
      }

      input::file-selector-button:hover{
        color: aqua;
        border: 2px solid purple;
        box-shadow: 0 0 10px violet;
        /* transform: scale(0.99); */
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);

      }
            
}

form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input {
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
    border-color: #3291e6;
}

form .gender-details .gender-title {
    font-size: 20px;
    font-weight: 500;
}

form .category {
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
}

form .category label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

form .category label .dot {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
}

#dot-1:checked~.category label .one,
#dot-2:checked~.category label .two,
#dot-3:checked~.category label .three {
    background: #9b59b6;
    border-color: #d9d9d9;
}

form input[type="radio"] {
    display: none;
}

form .button {
    height: 45px;
    margin: 35px 0
}

form .button input {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #1977cc;
}

form .button input:hover {
    /* transform: scale(0.99); */
    background: #3291e6;
}

@media(max-width: 584px) {
    .container {
        max-width: 100%;
    }

    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }

    form .category {
        width: 100%;
    }

    .content form .user-details {
        max-height: 300px;
        overflow-y: scroll;
    }

    .user-details::-webkit-scrollbar {
        width: 5px;
    }
}

@media(max-width: 459px) {
    .container .content .category {
        flex-direction: column;
    }
}
`;

export default StyleDoctorDetails;