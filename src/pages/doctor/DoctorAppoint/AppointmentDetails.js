import React, { useState, useEffect } from "react";
import hostURL from '../../../data/URL';
import { getToken } from "../../../data/Token";
import StyleAppointmentDetails from "./StyleAppointmentDetails";

const AppointmentDetails = ({ appointment, onApprove, onReject, onClose }) => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Function to check if the "token" cookie is present
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken); // Set hasToken to true if token exists, false otherwise
      setToken(retrivedToken);
      console.log(token)
    };

    checkTokenCookie();
  }, [token]);


  const handleApprove = async () => {

    const time_slot="From-"+fromTime+" To-"+toTime;

    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/approveappointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          appoint_id: appointment.appoint_id,
          patient_id: appointment.patient_id,
          patient_name: appointment.patient_name,
          date: appointment.date,
          time_slot: time_slot,
          description: appointment.description,
          document: appointment.document,
          Patient_Avatar: appointment.Patient_Avatar,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); 
        onClose();
        alert("Appointment Approved Successfully")
      } else {
        const errorResult = await response.json();
        console.error(errorResult.error); 
        alert("Something went wrong")
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert("Something went wrong")
    }
  };

  const handleReject = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/rejectappointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          appoint_id: appointment.appoint_id,
          patient_id: appointment.patient_id,
          date: appointment.date,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); 
        onClose();
        alert("Appointment Rejected Successfully")
      } else {
        const errorResult = await response.json();
        console.error(errorResult.error); 
        alert("Something went wrong")
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert("Something went wrong")
    }
  };

  const handleClose = () => {
    // Log the onClose prop to the console
    console.log(onClose);
  
    if (typeof onClose === 'function') {
      onClose();
    } else {
      console.error("onClose is not a function. Please provide a valid function as a prop.");
    }
  };
  return (
    <StyleAppointmentDetails>
      <div className="container">
        <div className="title">Appointment</div>
        <button className="close-btn" onClick={handleClose}>X</button>
        <div className="details">
          <p><strong>Appointment Time:</strong> {appointment.preferred_time}</p>
          <p><strong>Description:</strong>{appointment.description}</p>
          <p><strong>Attached Document:</strong> <a href={appointment.document}>View Document</a></p>
        </div>
        <div className="time-slot">
          <h2>Time Slot</h2>
          <label htmlFor="fromTime">From:</label>
          <input
            type="time"
            id="fromTime"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
          <label htmlFor="toTime">To:</label>
          <input
            type="time"
            id="toTime"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={handleApprove}>Approve</button>
          <button onClick={handleReject}>Reject</button>
        </div>
      </div>
    </StyleAppointmentDetails>
  );
};

export default AppointmentDetails;
