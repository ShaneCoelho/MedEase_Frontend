import React, { useState, useEffect } from 'react';
import StyleReviews from './StyleReviews';
import Profile from './Profile/profile.jpg'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import SubHeader from '../Shared/SubHeader';

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

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  useEffect(() => {
    const filteredResults = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDoctors(filteredResults);
  }, [searchQuery]);

  return (
    <div>
    <Header />
    <SubHeader title="Reviews" subtitle="Trusted by patients, endorsed by results – our doctors exceed expectations." />
    <StyleReviews>
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
              <button className="book-appointment-btn">Review Doctor</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </StyleReviews>
    <Footer/>
    </div>

  );
};

export default Reviews;