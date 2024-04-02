import { useEffect, useState } from 'react';
import StyleHeader from './StyleHeader';
import { Link } from 'react-router-dom';
import img1 from '../../../images/logo1.png';
import img2 from '../../../images/logo2.png';
import img3 from '../../../images/logo3.png';

import avatar from '../../../images/avatar.jpg';
import { Button, message } from 'antd';
import HeaderNav from './HeaderNav';

const Header = () => {
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hanldeSignOut = () => {
        // Implement your sign-out logic here
        message.success("Successfully Logged Out")
    }

    const content = (
        <div className='nav-popover'>
            <div className='my-2'>
                <h5 className='text-capitalize'>User Name</h5>
                <p className='my-0'>user@example.com</p>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <Button variant="outline-danger" className='w-100' size="sm" onClick={hanldeSignOut}>
                Log Out
            </Button>
        </div>
    );

    return (
        <>
        <StyleHeader>
            <header id="header" className={`fixed-top ${!show && "stickyHeader"}`}>
                <div className="container d-flex align-items-center">
                    <Link to={'/home'} className="logo me-auto">
                        <img src={img2} alt="" className="img-fluid" />
                    </Link>
                    <HeaderNav content={content} open={open} setOpen={setOpen} />
                </div>
            </header>
            </StyleHeader>
        </>
        
    );
}

export default Header;
