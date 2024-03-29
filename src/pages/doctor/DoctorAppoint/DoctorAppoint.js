import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';
import { getToken } from "../../../data/Token";
import StyleDoctorAppoint from "./StyleDoctorAppoint";
import AppointmentDetails from "./AppointmentDetails"; // Import the AppointmentDetails component
import PatientInfoPopup from "./PatientInfoPopup"; // Import the PatientInfoPopup component

const DoctorAppoint = () => {
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);
  const [view, setView] = useState('patient'); // State to track the active view: patient or past

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showPatientInfoPopup, setShowPatientInfoPopup] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken);
      setToken(retrivedToken);
    };

    checkTokenCookie();
    fetchData();
  }, [token, patientAppointments]);

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

  const handleApproveAppointment = (time_slot) => {
    // Logic to approve the appointment
    console.log("Time slot is:", time_slot);
    // Here, you can set selectedPatient and then set showPatientInfoPopup to true
  };

  const handleRejectAppointment = (appointmentId) => {
    // Logic to reject the appointment
    console.log("Reject appointment with ID:", appointmentId);
  };

  const toggleView = (selectedView) => {
    setView(selectedView);
  };

  const PastAppointments = [
      { patient_name: 'John Doe', appointment_date: '2023-10-15', time_slot: '10:00 AM - 11:00 AM' },
      { patient_name: 'Jane Smith', appointment_date: '2023-11-20', time_slot: '11:30 AM - 12:30 PM' },
      { patient_name: 'Michael Johnson', appointment_date: '2023-12-05', time_slot: '2:00 PM - 3:00 PM' },
      { patient_name: 'Michael Johnson', appointment_date: '2023-12-05', time_slot: '3:30 PM - 4:30 PM' },
      { patient_name: 'Michael Johnson', appointment_date: '2023-12-05', time_slot: '5:00 PM - 6:00 PM' },
      { patient_name: 'Michael Johnson', appointment_date: '2023-12-05', time_slot: '6:30 PM - 7:30 PM' },
      { patient_name: 'Michael Johnson', appointment_date: '2023-12-05', time_slot: '8:00 PM - 9:00 PM' },
      { patient_name: 'Michael Johnson', appointment_date: '2023-12-05', time_slot: '9:30 PM - 10:30 PM' },
    
  ];

  return (
    <StyleDoctorAppoint>
      <div>
        <div className="toggle-container">
          <button className={view === 'patient' ? 'active' : ''} onClick={() => toggleView('patient')}>Patient Appointments</button>
          <button className={view === 'past' ? 'active' : ''} onClick={() => toggleView('past')}>Past Appointments</button>
        </div>

        {loading ? (
          <Loading />
        ) : view === 'patient' ? (
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
                        Approve appointment
                      </button>
                      <button onClick={() => {
                        setSelectedPatient(appointment);
                        setShowPatientInfoPopup(true);
                      }}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="past-appointments-container">
            <div className="title2">Past Appointments</div>
            <div className="card-container">
              {/* Map through past appointments and render each as a card */}
              {PastAppointments.map((appointment, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <h3>{appointment.patient_name}</h3>
                    <span>Time Slot: {appointment.time_slot}</span>
                  </div>
                  <div className="card-body">
                    <p><strong>Date:</strong> {appointment.appointment_date}</p>
                    {/* Add more details if needed */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedAppointment && (
          <AppointmentDetails
            appointment={selectedAppointment}
            onApprove={handleApproveAppointment}
            onReject={handleRejectAppointment}
            onClose={handleCloseDetails}
          />
        )}

        {showPatientInfoPopup && (
          <PatientInfoPopup
            patient={selectedPatient}
            onApprove={() => {
              handleApproveAppointment(selectedPatient.time_slot); // Assuming you have time_slot in selectedPatient
              setShowPatientInfoPopup(false);
            }}
            onClose={() => setShowPatientInfoPopup(false)}
          />
        )}
      </div>
    </StyleDoctorAppoint>
  );
};

export default DoctorAppoint;
