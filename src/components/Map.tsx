import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DetailsCard from './DetailsCard';

const Map: React.FC = () => {
  // latitude, longitude
  const position: [number, number] = [51.505, -0.09];

  const mockBusinessData = {
    name: 'Mock Business',
    website: 'www.mockbusiness.com',
    phone: '603-555-0123',
    email: 'info@mockbusiness.com',
    instagram: 'mockbusiness',
    x: 'mockbusiness',
    facebook: 'mockbusiness',
    address: {
      street1: '123 Main Street',
      street2: 'Suite 456',
      city: 'Manchester',
      state: 'NH',
      country: 'USA',
      zip: '03101',
    },
  };

  return (
    <MapContainer
      style={{ height: '80vh', width: '95vw' }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          <DetailsCard businessData={mockBusinessData} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
