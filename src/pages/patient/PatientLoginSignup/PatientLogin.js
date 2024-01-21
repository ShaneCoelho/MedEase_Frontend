import React from "react";
import './PatientLogin.css'
import { FaUser, FaLock } from "react-icons/fa";


const PatientLogin = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon" />

                </div>
                <div className="input-box">
                    <input type="text" placeholder="Password" required/>
                    <FaLock className="icon2" />


                </div>
                <div className="remember-forgot">
                    <a href="">Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="">Signup</a></p>
                </div>
            </form>
        </div>
    );
}

export default PatientLogin;