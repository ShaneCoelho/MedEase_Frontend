import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap((props) => {
  const [userLocation, setUserLocation] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch dummy doctors data
    const dummyDoctors = [
      { id: 1, lat: -34.4, lng: 150.7, name: 'Dr. Smith' },
      { id: 2, lat: -34.3, lng: 150.6, name: 'Dr. Johnson' },
      // Add more dummy doctor data
    ];
    setDoctors(dummyDoctors);

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  }

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {userLocation && doctors.map((doctor) => {
        const distance = calculateDistance(userLocation.lat, userLocation.lng, doctor.lat, doctor.lng);
        return (
          <Marker
            key={doctor.id}
            position={{ lat: doctor.lat, lng: doctor.lng }}
            title={`${doctor.name} (${distance.toFixed(2)} km away)`}
          />
        );
      })}
    </GoogleMap>
  );
}));

const DoctorMap = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAwo_vYYR9knVrvoX8dH16NVhwlV4R875U&libraries=places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default DoctorMap;
