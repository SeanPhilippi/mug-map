import { FC, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerCard from './MarkerCard.tsx';
import useFetch from '../../../hooks/useFetch.ts';
import type { BusinessMarkerData } from '../../../types';

interface MapProps {
  coords: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

const Map: FC<MapProps> = ({ coords }) => {
  const [businesses, setBusinesses] = useState<BusinessMarkerData[]>([]);
  const { data, error, query } = useFetch();

  const fetchBusinesses = async () => {
    try {
      const businessData = await query('businesses', 'get');
      setBusinesses(businessData);
      console.log('==data for /businesses GET', data);
      console.log('==error for /businesses GET', error);
      return businessData;
    } catch (err) {
      // ! display error to user in future
      console.log(err);
    }
  };

  useEffect(() => {
    // this wraps actualFetchBusinesses so it can be awaited,
    // can't await a function directly in a useEffect
    fetchBusinesses();
  }, []);

  return (
    <MapContainer
      key={coords.lat.toString()}
      // MapContainer requires a fixed height and width to render properly
      style={{ height: 'calc(90vh - 84px)', width: '100vw' }}
      center={[coords.lat, coords.lng]}
      zoom={coords.zoom}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {businesses?.map(
        business =>
          business.lat &&
          business.lng && (
            <Marker
              key={business.id}
              position={[business.lat, business.lng]}
            >
              <Popup>
                <MarkerCard businessMarkerData={business} />
              </Popup>
            </Marker>
          ),
      )}
    </MapContainer>
  );
};

export default Map;
