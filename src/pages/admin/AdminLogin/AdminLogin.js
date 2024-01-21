import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StyleAdminLogin from './StyleAdminLogin';  // Assuming StyleAdminLogin is a styled-component

const AdminLogin = () => {
    return (
        <StyleAdminLogin>
            <div className="ad-body">
                <div className="wrapper">
                    <form action="">
                        <h1>Admin Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required /> {/* Change type to 'password' */}
                            <FaLock className="icon2" />
                        </div>
                        <div className="remember-forgot">
                            <a href="">Forgot password?</a>
                        </div>
                        <button type="submit">Login</button>

                    </form>
                </div>
            </div>
        </StyleAdminLogin>
    );
}

export default AdminLogin;
