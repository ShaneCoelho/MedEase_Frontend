import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';
import { getToken } from "../../../data/Token";
import StylePast from "./StylePast";
import { addDays } from 'date-fns';
import { NavLink, useNavigate } from 'react-router-dom';
import ViewTodayAppoint from './ViewTodayAppoint';
import { Drawer, Button } from 'antd';
import StyleHeader from './StyleDocDash';
import DocDash from './DocDash';



const ViewPastAppoint = () => {
  const [patientApprovedAppointments, setPatientApprovedAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const retrivedToken = getToken('token');
    setToken(retrivedToken);
    fetchData();
  }, [token, selectedDate]);

  useEffect(() => {
    fetchApprovedAppointment();
  }, [token, patientApprovedAppointments]);

  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/viewapprovedappointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPatientApprovedAppointments(data);
        setLoading(false);
      } else {
        console.error('Failed to fetch data. Server returned:', response.status, response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setLoading(false);
    }
  };

  const fetchApprovedAppointment = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/viewapprovedappointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPatientApprovedAppointments(data);
        setLoading(false);
      } else {
        console.error('Failed to fetch data. Server returned:', response.status, response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setLoading(false);
    }
  };

  const filterAppointmentsByDate = () => {
    if (!selectedDate) return patientApprovedAppointments;

    const formattedSelectedDate = selectedDate.toLocaleDateString('en-GB');

    return patientApprovedAppointments.filter(appointment => {
      const formattedAppointmentDate = appointment.date;
      return formattedAppointmentDate === formattedSelectedDate;
    });
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleButtonClick = (item) => {
    // Handle button click based on the item
    console.log(`Button clicked for ${item}`);
  };
  const handleLogout = () => {
    console.log('Logout clicked');
    // Redirect to the logout page using React Router
    navigate('/logout');
  };

  return (
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
                className={selectedOption === 'home' ? 'active' : ''}
                onClick={() => handleOptionChange('home')}
              >
                <NavLink to="/docdash">Home</NavLink>
              </li>
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
      
      <StylePast>
      <div className="past-appointments-container">
        <div className="title2">Approved Appointments</div>
        <div className="date-filter">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText=" Select a past date"
            maxDate={new Date()} // Set maximum date to current date
          />
        </div>
        <div className="card-container">
          {filterAppointmentsByDate().map((appointment, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h3>{appointment.patient_name}</h3>
                <span>Time Slot: {appointment.time_slot}</span>
              </div>
              <div className="card-body">
                <p><strong>Date:</strong> {appointment.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StylePast>
    </StyleHeader>
  );
};

export default ViewPastAppoint;
