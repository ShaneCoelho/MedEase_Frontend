import React, { useState } from "react";
import StyleAppointmentDetails from "./StyleAppointmentDetails";

const AppointmentDetails = ({ appointment, onApprove, onReject, onClose }) => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleApprove = () => {
    // Logic to approve the appointment
    onApprove();
  };

  const handleReject = () => {
    // Logic to reject the appointment
    onReject();
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
          <p><strong>Appointment Time:</strong> {appointment.time}</p>
          <p><strong>Description:</strong>Heart problems along with some weird mental problems related to stress and anxiety leading to hyperventilation {appointment.description}</p>
          <p><strong>Attached Document:</strong> <a href={appointment.documentUrl}>View Document</a></p>
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
