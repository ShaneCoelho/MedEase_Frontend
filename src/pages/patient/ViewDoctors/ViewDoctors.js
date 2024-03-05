import React, { useState, useEffect } from 'react';
import StyleViewDoctors from './StyleViewDoctors';
import Header from '../../Shared/Header/HeaderNav';
import SubHeader from '../../Shared/SubHeader';
import Footer from '../../Shared/Footer/Footer';
import axios from 'axios';
import hostURL from '../../../data/URL';
import Loading from '../../Loading/Loading';

const ViewDoctor = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredResults = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDoctors(filteredResults);
  }, [searchQuery, doctorsData]);

  const fetchData = async () => {
    try {
      const response = await axios.post(hostURL.link + '/api/patient/appointment/viewdoctors');
      setDoctorsData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleBookAppointment = () => {
    // Redirect to the "/doctor-appoint" page
    window.location.href = '/patient-appoint';
  };

  return (
    <>
      <Header />
      <SubHeader title="View Doctors" subtitle="Explore our team of healthcare professionals" />
      <StyleViewDoctors>
        <div className='vd-body'>
          <div className="doctor-search-container">
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="doctor-list">
              {filteredDoctors.map((doctor) => (
                <div className="doctor-card" key={doctor._id}>
                  <img
                    src={doctor.Avatar}
                    alt={doctor.name}
                    className="profile-picture"
                  />
                  <div className="doctor-details">
                    <h2>{doctor.name}</h2>
                    <p>Practicing at: {doctor.practicing_at}</p>
                    <p>Specialization: {doctor.specialization}</p>
                    <p>Location: {doctor.city}</p>
                    <button className="book-appointment-btn" onClick={handleBookAppointment}>Book Appointment</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StyleViewDoctors>
      <Footer />
    </>
  );
};

export default ViewDoctor;