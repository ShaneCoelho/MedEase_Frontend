import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';
import { getToken } from "../../../data/Token";
import StyleDoctorAppoint from "./StyleDoctorAppoint";
import AppointmentDetails from "./AppointmentDetails";
import PatientInfoPopup from "./PatientInfoPopup";
import { addDays } from 'date-fns';

const DoctorAppoint = () => {
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);
  const [view, setView] = useState('patient');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showPatientInfoPopup, setShowPatientInfoPopup] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [patientApprovedAppointments, setPatientApprovedAppointments] = useState([]);

  useEffect(() => {
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken);
      setToken(retrivedToken);
    };

    checkTokenCookie();
    fetchData();
  }, [token, patientAppointments]);

  useEffect(() => {
    fetchApprovedAppointment();
  }, [token, patientApprovedAppointments]);

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

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseDetails = () => {
    setSelectedAppointment(null);
  };

  const handleApproveAppointment = (time_slot) => {
    console.log("Time slot is:", time_slot);
  };

  const handleRejectAppointment = (appointmentId) => {
    console.log("Reject appointment with ID:", appointmentId);
  };

  const toggleView = (selectedView) => {
    setView(selectedView);
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
    <StyleDoctorAppoint>

      <div>
        <div className="toggle-container">
          <button className={view === 'patient' ? 'active' : ''} onClick={() => toggleView('patient')}>Patient Appointments</button>
          <button className={view === 'past' ? 'active' : ''} onClick={() => toggleView('past')}>Approved Appointments</button>
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
            <div className="title2">Approved Appointments</div>
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
                  </div>
                  <div className="card-body">
                    <p><strong>Date:</strong> {appointment.date}</p>
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
              handleApproveAppointment(selectedPatient.time_slot);
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
