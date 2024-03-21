import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Drawer, Button, Popover } from "antd";
import { FaHome, FaUserMd, FaSignInAlt } from "react-icons/fa";
import StyleHeader from "./StyleDocDash";

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

  return (
    <>
      <StyleHeader>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            {appointments.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={"/" + item.toLowerCase().replace(/\s/g, "-")}
                  className="nav-link scrollto"
                  activeClassName="active"
                >
                  {item}
                </NavLink>
              </li>
            ))}
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
    </>
  );
};

export default DocDash;
