import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import StyleHeader from './StyleDocDash';
import ViewTodayAppoint from './Today\'s appointment/ViewTodayAppoint';
import ViewPastAppoint from './Past appointments/ViewPastAppoint';
import CancelAppoint from './Cancel appoinment/CancelAppoint';
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
    navigate('/');
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
          <section className="why-us mt-5 mt-md-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                    <h3>Today's Appointments</h3>
                    <p>See who you're meeting today! Check this section to view all your appointments scheduled for the current day. It's a quick way to stay organized and ensure you're ready for each appointment on time.</p>
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
                          <h4>Past <br></br>Appointments</h4>
                          <p> Reflect on your medical history. Here, you can find details of your previous appointments, including dates, times. It's helpful for recalling past discussions and tracking progress.</p>
                          <NavLink to="/viewpastappoint">
                            <Button className="btn" onClick={() => handleButtonClick("Past Appointments")}>
                              View All
                            </Button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <div className="icon" />
                          <h4>Cancel <br></br>Appointments</h4>
                          <p>Need to reschedule? This area lets you cancel your upcoming appointments. If you can't take an appointment, you can easily cancel it here, ensuring smooth communication with your patients.</p>
                          <NavLink to="/cancelappoint">
                            <Button className="btn" onClick={() => handleButtonClick("Cancel Appointments")}>
                              View All
                            </Button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <div className="icon" />
                          <h4>Appointment <br></br>Requests</h4>
                          <p>All Appointment requests! If you need to see your appointments, you can check all appointment requests in this section. Provide details like preferred dates and reasons for the visit, and confirm the appointment.</p>
                          <NavLink to="/doctor-appoint">
                            <Button className="btn2" onClick={() => handleButtonClick("Appointment Requests")}>
                              View All
                            </Button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <div className="icon" />
                          <h4>Reviews</h4>
                          <p>How was your patient's experience! After each appointment, you have the opportunity to check feedback</p>
                          <NavLink to="/viewreview">
                            <Button className="btn" onClick={() => handleButtonClick("Reviews")}>
                              View All
                            </Button>
                          </NavLink>
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
