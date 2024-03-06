import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';
import { getToken } from "../../../data/Token";
import StyleDoctorAppoint from "./StyleDoctorAppoint";
import AppointmentDetails from "./AppointmentDetails"; // Import the AppointmentDetails component

const DoctorAppoint = () => {
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    // Function to check if the "token" cookie is present
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken); // Set hasToken to true if token exists, false otherwise
      setToken(retrivedToken);
      console.log(token)
    };

    checkTokenCookie();
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/viewappointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPatientAppointments(data);
        console.log(data);
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


  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseDetails = () => {
    setSelectedAppointment(null);
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
      {loading ? (
        <Loading />
      ) : (
        <StyleDoctorAppoint>

          <div className="container">
            <div className="title">Patient Appointments</div>
            <div className="patient-list">
              {patientAppointments.map((appointment) => (
                <div key={appointment.appoint_id} className="patient-item">
                  <img
                    src={appointment.Patient_Avatar}
                    alt={appointment.patient_name}
                    className="profile-photo"
                  />
                  <div className="patient-info">
                    <h2>{appointment.patient_name}</h2>
                    <div className="options">
                      <button onClick={() => handleViewDetails(appointment)}>
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
      )}
      {selectedAppointment && (
        <AppointmentDetails
          appointment={selectedAppointment}
          onApprove={handleApproveAppointment}
          onReject={handleRejectAppointment}
          onClose={handleCloseDetails}
        />
      )}

    </div>
  );
};

export default DoctorAppoint;
