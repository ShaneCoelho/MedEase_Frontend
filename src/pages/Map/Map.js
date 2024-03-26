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
      <div className='container'>
        <MapContainer
          center={[0, 0]}
          zoom={1}
          dragging={!readonly}
          touchZoom={!readonly}
          doubleClickZoom={!readonly}
          scrollWheelZoom={!readonly}
          boxZoom={!readonly}
          keyboard={!readonly}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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

  useEffect(() => {
    if (readonly) {
      setPosition(location);
    }
  }, [readonly, location]);

  useMapEvents({
    click(e) {
      !readonly && setPosition(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
    },
    locationerror(e) {
      toast.error(e.message);
    },
  });

  const markerIcon = new L.Icon({
    iconUrl: '/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <>
      {!readonly && (
        <button type="button" onClick={() => Map.locate()}>
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
