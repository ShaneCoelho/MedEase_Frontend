import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { FaBars } from 'react-icons/fa';
import StyleHeader from './StyleDocDash';

const Navbar = ({ handleLogout, selectedOption, handleOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyleHeader>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <Button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </Button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Button className="navbtn" onClick={handleLogout}>
              Logout
            </Button>
          </li>
          <li
            className={selectedOption === 'home' ? 'active' : ''}
            onClick={() => {
              handleOptionChange('home');
              setIsOpen(false);
            }}
          >
            <NavLink to="/docdash">Home</NavLink>
          </li>
          <li
            className={selectedOption === 'today' ? 'active' : ''}
            onClick={() => {
              handleOptionChange('today');
              setIsOpen(false);
            }}
          >
            <NavLink to="/viewtodayappoint">Today's Appointments</NavLink>
          </li>
          <li
            className={selectedOption === 'past' ? 'active' : ''}
            onClick={() => {
              handleOptionChange('past');
              setIsOpen(false);
            }}
          >
            <NavLink to="/viewpastappoint">Past Appointments</NavLink>
          </li>
          <li
            className={selectedOption === 'cancel' ? 'active' : ''}
            onClick={() => {
              handleOptionChange('cancel');
              setIsOpen(false);
            }}
          >
            <NavLink to="/cancelappoint">Cancel Appointments</NavLink>
          </li>
           <li
            className={selectedOption === 'appoint' ? 'active' : ''}
            onClick={() => {
              handleOptionChange('appoint');
              setIsOpen(false);
            }}
          >
            <NavLink to="/doctor-appoint">Appointment  Requests</NavLink>
          </li>
          <li
            className={selectedOption === 'review' ? 'active' : ''}
            onClick={() => {
              handleOptionChange('review');
              setIsOpen(false);
            }}
          >
            <NavLink to="/viewreview">Reviews</NavLink>
          </li>
        </ul>
      </nav>
    </StyleHeader>
  );
};

export default Navbar;
