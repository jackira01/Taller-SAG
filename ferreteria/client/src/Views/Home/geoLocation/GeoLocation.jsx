import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

import 'leaflet/dist/leaflet.css';
import './GeoLocation.css';

const iconUbication = new L.icon({
  iconUrl: icon,
  iconSize: [30, 50], // size of the icon
  iconAnchor: [5, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [-4, -70], // point from which the popup should open relative to the iconAnchor
});

const GeoLocation = () => {
  const position = [4.440879454561967, -75.23405672584052];
  return (
    <div className='px-4 py-8 md:px-8 lg:px-20 max-w-full overflow-hidden'>
      <div>
        <h2 className='text-3xl font-bold text-center dark:text-text text-black p-2 mt-5'>
          Visitanos Aquí!
        </h2>
        <div className='border-4 border-cardLigth dark:border-card max-w-full'>
          <MapContainer
            className='mapa'
            center={position}
            zoom={17}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={iconUbication}>
              <Popup>
                Ferreteria. <br /> Taller SAG.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default GeoLocation;
