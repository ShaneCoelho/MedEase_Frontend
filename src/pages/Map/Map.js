import React, { useState, useEffect } from 'react';
import StyleMap from './StyleMap';
import 'leaflet/dist/leaflet.css';


import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { toast } from 'react-toastify';
import * as L from 'leaflet';

export default function Map({ readonly, location, onChange }) {
  return (
    <StyleMap>
      <div className='container' >
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
            maxZoom={14} //Maximum zoom for location keep it at 14 or 15
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          <FindButtonAndMarker
            readonly={readonly}
            location={location}
            onChange={onChange}
          />
        </MapContainer>
      </div>
    </StyleMap>
  );
}

function FindButtonAndMarker({ readonly, location, onChange }) {
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
          className={StyleMap.find_location}
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
    </>
  );
}
