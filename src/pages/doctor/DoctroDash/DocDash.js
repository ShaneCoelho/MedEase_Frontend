import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import StyleHeader from './StyleDocDash';
import ViewTodayAppoint from './ViewTodayAppoint';
import ViewPastAppoint from './ViewPastAppoint';
import StyleDoc2 from './StyleDoc2';

const DocDash = ({ open, setOpen, isLoggedOut, data, avatar, content }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleButtonClick = (item) => {
    // Handle button click based on the item
    console.log(`Button clicked for ${item}`);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Redirect to the logout page using React Router
    navigate('/logout');
  };

  return (
    <>
      <StyleHeader>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Button className="navbtn" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </ul>
          <nav className="navbar">
            <ul>
              <li
                className={selectedOption === 'today' ? 'active' : ''}
                onClick={() => handleOptionChange('today')}
              >
                <NavLink to="/viewtodayappoint">Today's Appointments</NavLink>
              </li>
              <li
                className={selectedOption === 'past' ? 'active' : ''}
                onClick={() => handleOptionChange('past')}
              >
                <NavLink to="/viewpastappoint">Past Appointments</NavLink>
              </li>
            </ul>
          </nav>
        </nav>

        <Drawer
          placement={'left'}
          width={500}
          onClose={onClose}
          open={open}
          size={'default'}
          extra={<Button type="primary" onClick={onClose}> Close</Button>}
        >
          {/* Drawer content */}
        </Drawer>
        <StyleDoc2>
        <section className="why-us mt-5 mt-md-0" >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Today's Appointments</h3>
                  <NavLink to="/viewtodayappoint">
                    <Button onClick={() => handleButtonClick("Today's Appointments")}>
                      View All
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <div className="icon" />
                        <h4>Past Appointments</h4>
                        <Button className="btn" onClick={() => handleButtonClick("Past Appointments")}>
                    View All
                  </Button>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <div className="icon" />
                        <h4>Cancel Appointments</h4>
                        <Button className="btn" onClick={() => handleButtonClick("Cancel Appointments")}>
                    View All
                  </Button>

                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <div className="icon" />
                        <h4>Reviews</h4>
                        <Button className="btn2" onClick={() => handleButtonClick("Reviwes")}>
                    View All
                  </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container2'>
          <h><i>Welcome Doctor</i></h>

          </div>
        </section>
      </StyleDoc2>
      </StyleHeader>

      {/* Render the appropriate component based on the selected option */}
      {selectedOption === 'today' && <ViewTodayAppoint />}
      {selectedOption === 'past' && <ViewPastAppoint />}
    </>
  );
};

export default DocDash;
