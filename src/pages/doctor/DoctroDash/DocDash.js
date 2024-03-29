import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Drawer, Button, Popover, Card } from "antd";
import StyleHeader from "./StyleDocDash";
import StyleDoc2 from "./StyleDoc2"; // Import the style for InfoPage

const DocDash = ({ open, setOpen, isLoggedOut, data, avatar, content }) => {
  const [appointments, setAppointments] = useState([
    "Today's Appointment",
    "Appointment",
    "Reviews",
    "Past Appointment",
  ]);

  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // Add your logout functionality here
    console.log("Logout clicked");
    // For example, redirect to the logout page
    navigate("/logout");
  };

  const handleButtonClick = (item) => {
    // Handle button click based on the item
    console.log(`Button clicked for ${item}`);
  };

  return (
    <>
      <StyleHeader>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>    
              <li>
                 <Button classname="navbtn" onClick={handleLogout}>Logut</Button>
              </li>
          </ul>
          {isLoggedOut && (
            <div>
              <Popover content={content}>
                <div className="profileImage">
                  <img
                    src={data?.img ? data?.img : avatar}
                    alt=""
                    className="profileImage shadow img-fluid"
                  />
                </div>
              </Popover>
            </div>
          )}
        </nav>

        <Drawer
          placement={"left"}
          width={500}
          onClose={onClose}
          open={open}
          size={"default"}
          extra={<Button type="primary" onClick={onClose}> Close</Button>}
        >
          <ul className="mobile-menu-nav">
            {appointments.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={"/" + item.toLowerCase().replace(/\s/g, "-")}
                  className={({ isActive }) =>
                    isActive ? "nav-link scrollto active" : ""
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </Drawer>
      </StyleHeader>

      {/* InfoPage content */}
      <StyleDoc2>
        <section className="why-us mt-5 mt-md-0" >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Today's Appointments</h3>
                  <Button onClick={() => handleButtonClick("Today's Appointments")}>
                    View All
                  </Button>
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
        </section>
      </StyleDoc2>
    </>
  );
};

export default DocDash;
