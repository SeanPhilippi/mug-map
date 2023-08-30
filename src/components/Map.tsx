import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@mui/material/Button';

const Map: React.FC = () => {
  // latitude, longitude
  const position: [number, number] = [51.505, -0.09];

  return (
    <>
      <MapContainer
        style={{ height: '80vh', width: '100vh' }}
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
            A pretty CSS3 popup. <br /> Easily customizable.
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
