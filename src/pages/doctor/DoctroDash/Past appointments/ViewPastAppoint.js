import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hostURL from '../../../../data/URL';
import Loading from '../../../Loading/Loading';
import { getToken } from "../../../../data/Token";
import StylePast from "./StylePast";
import { addDays } from 'date-fns';
import { NavLink, useNavigate } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import StyleHeader from '../StyleDocDash';
import DocDash from '../DocDash';
import Navbar from '../Navbar';



const ViewPastAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [hasToken, setHasToken] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken);
      setToken(retrivedToken);
    };

    checkTokenCookie();
    fetchData();
  }, [token, appointments]);

  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/viewpastappointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
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
    if (!selectedDate) return appointments;

    const formattedSelectedDate = selectedDate.toLocaleDateString('en-GB');

    return appointments.filter(appointment => {
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
    navigate('/');
  };

  return (
    <StyleHeader>                                
       <Navbar
        handleLogout={handleLogout}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      
      <StylePast>
      <div className="past-appointments-container">
        <div className="title2">Past Appointments</div>
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
