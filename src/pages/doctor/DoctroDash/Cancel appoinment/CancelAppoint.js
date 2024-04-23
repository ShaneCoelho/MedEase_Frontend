import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hostURL from '../../../../data/URL';
import Loading from '../../../Loading/Loading';
import { getToken } from "../../../../data/Token";
import { NavLink, useNavigate } from 'react-router-dom';
import StyleCancel from './StyleCancel';
import { addDays } from 'date-fns';
import { Button } from 'antd';
import StyleHeader from '../StyleDocDash';

const CancelAppoint = () => {
  const [patientApprovedAppointments, setPatientApprovedAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const retrivedToken = getToken('token');
    setToken(retrivedToken);
    fetchData();
  }, [token, selectedDate]);

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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/logout');
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(hostURL.link + `/api/doctor/appointment/delete/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setPatientApprovedAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.appoint_id !== appointmentId));
        console.log('Appointment deleted successfully');
      } else {
        console.error('Failed to delete appointment. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while deleting appointment:', error);
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
              <li
             className={selectedOption === 'cancel' ? 'active' : ''}
             onClick={() => handleOptionChange('cancel')}
           >
             <NavLink to="/cancelappoint">Cancel Appointments</NavLink>
           </li>
              <li
             className={selectedOption === 'review' ? 'active' : ''}
             onClick={() => handleOptionChange('review')}
           >
             <NavLink to="/viewreview">Reviews</NavLink>
           </li>
            </ul>
          </nav>
        </nav>
        <StyleCancel>
          <div className="past-appointments-container">
            <div className="title2">Appointments</div>
            <div className="date-filter">
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText=" Select a date"
                minDate={new Date()}
                maxDate={addDays(new Date(), 7)}
              />
            </div>
            <div className="card-container">
              {filterAppointmentsByDate().map((appointment, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <h3>{appointment.patient_name}</h3>
                    <span>Time Slot: {appointment.time_slot}</span>
                    <button onClick={() => handleDeleteAppointment(appointment.appoint_id)}>Delete</button>
                  </div>
                  <div className="card-body">
                    <p><strong>Date:</strong> {appointment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StyleCancel>
    </StyleHeader>
  );
};

export default CancelAppoint;
