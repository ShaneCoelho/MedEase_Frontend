import styled from "styled-components";

const StyleAdminLogin = styled.section`

.ad-body{
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../assets/Doctor/Home.jpg') center/cover;
        color: #fff;
        font-family: 'Arial', sans-serif;
      }
    
      .wrapper {
        text-align: center;
        width: 410px;
        background: rgba(255, 255, 255, 0.8);
        color: #050046;
        border-radius: 40px;
        padding: 65px 26px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
    
      .wrapper:hover {
        transform: scale(1.02);
      }
    
      .wrapper h1 {
        font-size: 36px;
        text-align: center;
        color: #050046;
      }
    
      .wrapper .input-box {
        position: relative;
        width: 70%;
        height: 60px;
        margin: 40px auto;
        text-align: center;
      }
    
      .input-box input {
        margin-left: -15px;
        width: 100%;
        height: 100%;
        background: rgba(220, 255, 255, 0.6);
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 40px;
        font-size: 12px;
        font-style: italic;
        color: navy; /* Set the text color to navy blue */
        padding: 12px 12px;
    }
    
    .input-box input::placeholder {
        color: #050046; /* Set the placeholder text color to the login color */
    }
    
    .input-box .icon {
        position: absolute;
        right: 2px;
        top: 60%;
        transform: translateY(-50%);
        font-size: 17px;
        color: #050046;
    }
    
    .input-box .icon2 {
        position: absolute;
        right: 2px;
        top: 60%;
        transform: translateY(-50%);
        font-size: 17px;
        color: #050046;
    }
    : #050046;
    }    
    
      .remember-forgot label input {
        accent-color: #fff;
        margin-right: 4px;
      }
    
      .remember-forgot a {
        color: #3498db; /* Adjusted color for better visibility */
        text-decoration: none;
      }
    
      .remember-forgot a:hover {
        text-decoration: underline;
      }
    
      .wrapper button {
        width: 325px;
        height: 45px;
        background: #050046;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 23px;
        color: #fff;
        font-weight: 700;
        transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
      }
    
      .wrapper button:hover {
        background: #002750;
        transform: scale(1.05);
      }
    
      .wrapper .remember-forgot {
        display: flex;
        justify-content: center;
        font-size: 14.5px;
        margin: 15px 30px 15px;
      }
    
      .wrapper .register-link {
        font-size: 14.5px;
        text-align: center;
        margin: 30px 0 15px;
      }
    
      .register-link p a {
        color: #27ae60; /* Adjusted color for better visibility */
        text-decoration: none;
        font-weight: 600;
      }
    
      .register-link p a:hover {
        text-decoration: underline;
      }
    
      @media only screen and (max-width: 600px) {
        .wrapper {
          width: 100%;
        }
      }
    `;

export default StyleAdminLogin;  
