import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap((props) => {
  const [doctors, setDoctors] = useState([]);
  
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      defaultOptions={{
        // Customize map styles here
        // Example:
        // styles: StyleMap
      }}
    >
      {doctors.map((doctor, index) => (
        <Marker
          key={index}
          position={{ lat: doctor.lat, lng: doctor.lng }}
          // Add more properties like doctor name, etc. to display in info window
        />
      ))}
    </GoogleMap>
  );
}));

const DoctorMap = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  useEffect(() => {
    // Fetch doctors data from your API based on selected specialization and update state
    // Example:
    // fetchDoctors(selectedSpecialization).then(data => setDoctors(data));
  }, [selectedSpecialization]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
      <div className="filter-container">
        <label htmlFor="specialization">Filter by Specialization:</label>
        <select id="specialization" onChange={(e) => setSelectedSpecialization(e.target.value)}>
          <option value="">All Specializations</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          {/* Add more options */}
        </select>
      </div>
    </div>
  );
};

export default Map;
