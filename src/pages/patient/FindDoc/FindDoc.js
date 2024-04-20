import React, { useState, useEffect } from 'react';
import StyleFindDoc from './StyleFindDoc';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { toast } from 'react-toastify';
import * as L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import SubHeader from '../../Shared/SubHeader';
import Footer from '../../Shared/Footer/Footer';


// Dummy doctor specializations
const specializations = [
  "Cardiologist",
  "Dermatology",
  "Neurology",
  "Orthopedic",
  "Oncologist",
  "Ophthalmologist",
  "Orthopedist",
  "Otolaryngologist",
  "Osteopath",
  "Pathologist",
  "Pediatrician",
  "Physician executive",
  "Plastic surgeon",
  "Podiatrist",
  "Psychiatrist",
  "Pulmonologist",
  "Radiologist",
  "Rheumatologist",
  "Sleep medicine specialist",
  "Surgeon",
  "Urologist",
];

export default function Map({ readonly, location, onChange }) {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [filteredSpecializations, setFilteredSpecializations] = useState([]);
  const [lat, setLatitude] = useState(null);
  const [lng, setLongitude] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
   
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(String(position.coords.latitude)); 
        setLongitude(String(position.coords.longitude)); 
      },
      (error) => {
        toast.error(error.message);
      }
    );
  }, []);

  const handleFindDoctors = () => {
    // Redirect to the "/nearby-doc" page
 
    // alert(lat+' '+lng+' '+selectedSpecialization);
    navigate('/nearby-doc', { state: { lat, lng, specialization: selectedSpecialization } });
  };


  useEffect(() => {
    setFilteredSpecializations(
      specializations.filter(specialization =>
        specialization.toLowerCase().includes(selectedSpecialization.toLowerCase())
      )
    );
  }, [selectedSpecialization]);

  const handleSpecializationSelect = (specialization) => {
    setSelectedSpecialization(specialization);
    setFilteredSpecializations([]); // Clear the filtered list after selection
  };

  return (
    <div>
    <Header/ >
    <SubHeader title="Find Doctor" subtitle="Explore our team of healthcare professionals" />
    <StyleFindDoc>
      <div className='specialization-container'>
        {/* Input field for typing specialization */}
        <input
          type="text"
          placeholder="Enter Specialization"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          disabled={readonly}
        />
        {/* List of filtered specializations */}
        {selectedSpecialization && (
          <ul>
            {filteredSpecializations.map((specialization, index) => (
              <li key={index} onClick={() => handleSpecializationSelect(specialization)}>
                {specialization}
              </li>
            ))}
          </ul>
        )}
        {/* "Find My Doctor" button */}
        <button 
          type="button" 
          className={`${StyleFindDoc.find_doctor_alternate}`} 
          onClick={handleFindDoctors}
        >
          Find My Doctor
        </button>

      </div>
      <div className='map-container'>
        <MapContainer
          center={[20, -1000]}
          zoom={5}
          dragging={!readonly}
          touchZoom={!readonly}
          doubleClickZoom={!readonly}
          scrollWheelZoom={!readonly}
          boxZoom={!readonly}
          keyboard={!readonly}
          attributionControl={false}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={14}
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <FindButtonAndMarker
            readonly={readonly}
            location={location}
            onChange={onChange}
            selectedSpecialization={selectedSpecialization}
          />
        </MapContainer>
      </div>
      
    </StyleFindDoc>
    
<Footer/>
</div>
  );
}

function FindButtonAndMarker({ readonly, location, onChange, selectedSpecialization }) {
  const [position, setPosition] = useState(location);
  const map = useMapEvents({
    click(e) {
      !readonly && setPosition(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.setView(e.latlng, 200); // This is to zoom the accurate location Do not touch this
    },
    locationerror(e) {
      toast.error(e.message);
    },
  });

  const markerIcon = new L.Icon({
    iconUrl: '/marker-icon-2x.png',
    iconSize: [25, 31],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  useEffect(() => {
    map.invalidateSize();
  }, [map]);

  return (
    <>
      {!readonly && (
        <button 
          type="button" 
          className={StyleFindDoc.find_location}
          onClick={() => {
            map.locate(); // Trigger the map to locate user's position
          }}
        >
          Find My Location
        </button>
      )}

      {position && (
        <Marker
          position={position}
          draggable={!readonly}
          icon={markerIcon}
          eventHandlers={{
            dragend: (e) => {
              setPosition(e.target.getLatLng());
              onChange(e.target.getLatLng());
            },
          }}
        >
          <Popup>Shipping Location</Popup>
        </Marker>
      )}

      {/* Filter markers based on selected specialization */}
      {specializations.map((specialization, index) => (
        <Marker
          key={index}
          position={[20 + index * 0.01, -1000]}
          icon={markerIcon}
          eventHandlers={{
            click: () => selectedSpecialization === specialization && console.log(specialization),
          }}
        >
          {selectedSpecialization === specialization && (
            <Popup>{specialization}</Popup>
          )}
        </Marker>
      ))}
    </>
  );
}
