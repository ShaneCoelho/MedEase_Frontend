import React, { useState, useEffect } from 'react';
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';
import { getToken } from "../../../data/Token";
import StyleViewAppoint from "./StyleViewAppoint";

const ViewTodayAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);

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
      const response = await fetch(hostURL.link + '/api/doctor/appointment/viewtodaysappointments', {
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

  // const todayAppointments = appointments.filter(appointment => {
  //   const appointmentDate = new Date(appointment.date);
  //   const currentDate = new Date();
  //   return (
  //     appointmentDate.getDate() === currentDate.getDate() &&
  //     appointmentDate.getMonth() === currentDate.getMonth() &&
  //     appointmentDate.getFullYear() === currentDate.getFullYear()
  //   );
  // });

  const handleViewDocument = (documentUrl) => {
    // Placeholder function to handle viewing documents
    console.log("Viewing document at URL:", documentUrl);
  };

  return (
    <StyleViewAppoint>
      <div className="container">
        <div className="title">today's Appointments</div>
        {loading ? (
          <Loading />
        ) : (
          <div className="appointment-list">
            {appointments.map(appointment => (
              <div key={appointment.appoint_id} className="appointment-item">
                <img
                  src={appointment.Patient_Avatar}
                  alt={appointment.patient_name}
                  className="profile-photo"
                />
                <div className="appointment-info">
                  <h2>{appointment.patient_name}</h2>
                  <p><strong>Time Slot:</strong> {appointment.time_slot}</p>
                  <p><strong>Description:</strong> {appointment.description}</p>
                  <button onClick={() => handleViewDocument(appointment.document)}>View Document</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyleViewAppoint>
  );
};

export default ViewTodayAppoint;
