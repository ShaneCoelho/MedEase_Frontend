import { Popover } from "antd"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Drawer , Button } from 'antd';
import { FaHome,FaBars, FaPhoneAlt, FaWrench, FaUserMd, FaAddressBook, FaBloggerB, FaSignInAlt } from "react-icons/fa";
import StyleHeader from "./StyleHeader";

const HeaderNav = ({ open, setOpen, isLoggedOut, data, avatar, content }) => {
    const navigate = useNavigate();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        // Implement logout functionality here
        // For example, clear local storage, remove tokens, etc.
        // Redirect to the home page
        navigate('/');
    };

    return (
        <>
        <StyleHeader>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><NavLink to={'/home'} className="nav-link scrollto" activeClassName="active"><FaHome /> Home</NavLink></li>
                    <li><NavLink to={'/about'} className="nav-link scrollto" activeClassName="active">About</NavLink></li>
                    <li><NavLink to={'/reviews'} className="nav-link scrollto" activeClassName="active">Reviews</NavLink></li>
                    <li><NavLink to={'/symptoms'} className="nav-link scrollto" activeClassName="active">Symptoms</NavLink></li>
                    <li><NavLink to={'/view-doctor'} className="nav-link scrollto" activeClassName="active">Doctors</NavLink></li>
                    <li><NavLink to={'/find-doc'} className="nav-link scrollto" activeClassName="active">Find Doctors</NavLink></li>
                    <li><NavLink to={'/contact'} className="nav-link scrollto" activeClassName="active">Contact</NavLink></li>
                                      
                    <li><button className="button" onClick={handleLogout}activeClassName="active">Logout</button></li>
                        



         
                </ul>
                {isLoggedOut &&
                    <div>
                        <Popover content={content}>
                            <div className='profileImage'>
                                <img src={data?.img ? data?.img : avatar} alt="" className="profileImage shadow img-fluid" />
                            </div>
                        </Popover>
                    </div>
                }
                <FaBars className='mobile-nav-toggle' onClick={showDrawer} />
            </nav>



            <Drawer
                placement={'left'}
                width={300} // Adjusted width for smaller screens
                onClose={onClose}
                open={open}
                size={"default"}
                className="custom-drawer"
                headerStyle={{ background: '#002750', color: '#fff' }} // Custom header style
                bodyStyle={{ background: '##002750', padding: '40px' }} // Custom body style
                closeIcon={<Button type="primary" shape="circle" icon={<FaBars />} size="large" />} // Custom close icon
            >
                <ul className="mobile-menu-nav">
                    <li><NavLink to={'/home'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}><FaHome className="icon" />Home</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}><FaAddressBook className="icon" />About</NavLink></li>
                    <li><NavLink to={'/reviews'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}><FaWrench className="icon" />Reviews</NavLink></li>
                    <li><NavLink to={'/view-doctor'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}><FaUserMd className="icon" />Doctors</NavLink></li>
                    <li><NavLink to={'/find-doc'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}><FaUserMd className="icon" />Find Doctor</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}><FaPhoneAlt className="icon" />Contact</NavLink></li>
                    {!isLoggedOut &&
                        <li>
                            <button className="nav-link scrollto" onClick={handleLogout}>Logout</button>
                        </li>
                    }
                </ul>
            </Drawer>
            </StyleHeader>
        </>
    )
}

export default HeaderNav