import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@mui/material/Button';
import DetailsCard from './DetailsCard';

const Map: React.FC = () => {
  // latitude, longitude
  const position: [number, number] = [51.505, -0.09];

  const mockBusinessData = {
    name: 'test',
    address: 'test',
    website: 'test',
    phone: 'test',
    email: 'test',
    instagram: 'test',
    x: 'test',
    facebook: 'test',
  };

  return (
    <>
      <MapContainer
        style={{ height: '80vh', width: '95vw' }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
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
      <Button
        style={{ marginTop: '1rem' }}
        variant='contained'
        color='primary'
        onClick={() => console.log('clicked')}
      >
        New Submission
      </Button>
    </>
  );
};

export default Map;
