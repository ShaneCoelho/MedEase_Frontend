import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StyleDoctorLogin from './StyleDoctorLogin';


const DoctorLogin = () => {
    return (
        <StyleDoctorLogin>
            <div className="dc-body">
                <div className="wrapper">
                    <form action="">
                        <h1>Doctor Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required /> {/* Change type to 'password' */}
                            <FaLock className="icon2" />
                        </div>
 
                        <button type="submit">Login</button>

                    </form>
                </div>
            </div>
        </StyleDoctorLogin>
    );
}

export default DoctorLogin;