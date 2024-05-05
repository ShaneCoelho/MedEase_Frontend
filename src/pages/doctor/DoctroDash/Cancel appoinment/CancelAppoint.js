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
import Navbar from '../Navbar';
import StyleHeader from '../StyleDocDash';

const CancelAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken);
      setToken(retrivedToken);
    };

    checkTokenCookie();
    fetchData();
  }, [token, appointments]);

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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/');
  };

  const handleDeleteAppointment = async (appointmentId) => {
    console.log(appointmentId)
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/cancelappointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ appoint_id: appointmentId })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Server error');
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

  return (
    <StyleHeader>                                
      <Navbar
        handleLogout={handleLogout}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </StyleHeader>
  );
};

export default CancelAppoint;
