
import React, { useState, useEffect } from 'react';
import StyleViewDoctors from './StyleViewDoctors';
import Profile from './Profile/profile.jpg'

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    profilePicture: './Profile/profile.jpg',
    clinics: ['Clinic A', 'Clinic B'],
    specialization: 'Orthopedic',
    location: 'City X',
  },
  {
    id: 2,
    name: 'Dr. Ynez Dias',
    profilePicture: './Profile/ynez.jpg',
    clinics: ['Clinic A', 'Clinic B'],
    specialization: 'Cardiologist',
    location: 'City A',
  },
  {
    id: 3,
    name: 'Dr. Shane Coelho',
    profilePicture: './Profile/shane.jpg',
    clinics: ['Clinic A', 'Clinic B'],
    specialization: 'Physician',
    location: 'City B',
  },
  {
    id: 4,
    name: 'Dr. Lyris Dsilva',
    profilePicture: './Profile/lyris.webp',
    clinics: ['Clinic A', 'Clinic B'],
    specialization:'Anesthasiologist',
    location: 'City C',
  },
  // Add more doctors as needed
];

const ViewDoctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  useEffect(() => {
    const filteredResults = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDoctors(filteredResults);
  }, [searchQuery]);

  return (
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
          <div className="doctor-card" key={doctor.id}>
            <img
              src={require(`${doctor.profilePicture}`)}
              alt={doctor.name}
              className="profile-picture"
            />
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <p>Practicing at: {doctor.clinics.join(', ')}</p>
              <p>Specialization: {doctor.specialization}</p>
              <p>Location: {doctor.location}</p>
              <button className="book-appointment-btn">Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </StyleViewDoctors>
  );
};

export default ViewDoctor;
