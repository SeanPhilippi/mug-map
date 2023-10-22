import { FC, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerCard from './MarkerCard.tsx';
import { useFetch } from '../../../hooks/useFetch.ts';
import type { BusinessMarkerData } from '../../../types.d.ts';

const Map: FC = () => {
  const [businesses, setBusinesses] = useState<BusinessMarkerData[]>([]);

  const { data, error, query } = useFetch();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const data = await actualFetchBusinesses();
        console.log('==2nd data for /businesses GET', data);
        console.log('==error for /businesses GET', error)
      } catch (err) {
        console.log('fetchBusinesses error', err);
      }
    };

    const actualFetchBusinesses = async () => {
      try {
        const businessData = await query('businesses');
        setBusinesses(businessData);
        console.log('==1st data for /businesses GET', data)
        return businessData;
        // console.log('==error for /businesses GET', error)
      } catch (err) {
        console.log(err);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <MapContainer
      style={{ height: '80vh', width: '95vw' }}
      center={[0, 0]}
      zoom={2}
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
