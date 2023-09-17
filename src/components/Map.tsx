import { FC, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerCard from './MarkerCard.tsx';
import { useFetch } from '../hooks/useFetch.ts';
import type { BusinessMarkerData } from '../types.d.ts';

const Map: FC = () => {
  // latitude, longitude
  const position: [number, number] = [51.505, -0.09];

  const mockBusinessData: BusinessMarkerData = {
    name: 'Mock Business',
    has_mugs: true,
    wifi: true,
    work_friendly: true,
    coords: {
      lat: 0,
      lng: 0,
    },
  };

  const [businesses, setBusinesses] = useState<BusinessMarkerData[]>([]);

  const { data, error, query } = useFetch();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await query('businesses');
        setBusinesses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBusinesses();
  }, []);

  return (
    <MapContainer
      style={{ height: '80vh', width: '95vw' }}
      center={[51.505, -0.09]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          <MarkerCard businessMarkerData={mockBusinessData} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
