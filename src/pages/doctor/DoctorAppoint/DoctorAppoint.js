import React, { useState } from "react";
import StyleDoctorAppoint from "./StyleDoctorAppoint";
import AppointmentDetails from "./AppointmentDetails"; // Import the AppointmentDetails component

const DoctorAppoint = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Michael Johnson",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Emily Brown",
      profilePhoto: "https://via.placeholder.com/150",
    },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleApproveAppointment = (appointmentId) => {
    // Logic to approve the appointment
    console.log("Approve appointment with ID:", appointmentId);
  };

  const handleRejectAppointment = (appointmentId) => {
    // Logic to reject the appointment
    console.log("Reject appointment with ID:", appointmentId);
  };

  return (
    <div>
      <StyleDoctorAppoint>
        
           <div className="container">
           <div className="title">Patient Appointments</div>
           <div className="patient-list">
             {appointments.map((appointment) => (
               <div key={appointment.id} className="patient-item">
                 <img
                   src={appointment.profilePhoto}
                   alt={appointment.name}
                   className="profile-photo"
                 />
                 <div className="patient-info">
                   <h2>{appointment.name}</h2>
                   <div className="options">
                     <button onClick={() => handleViewDetails(appointment.id)}>
                       Approve Appointment
                     </button>
                     <button
                       onClick={() => handleApproveAppointment(appointment.id)}
                     >
                       View Details
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
        
      </StyleDoctorAppoint>

      {selectedAppointment && (
        <AppointmentDetails
          appointment={selectedAppointment}
          onApprove={handleApproveAppointment}
          onReject={handleRejectAppointment}
        />
      )}
    </div>
  );
};

export default DoctorAppoint;
