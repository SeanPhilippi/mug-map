import { FC, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { v4 } from 'uuid';
import MarkerCard from './MarkerCard.tsx';
import useFetch from '../../../hooks/useFetch.ts';
import { useSnackbar } from '../../../hooks/useSnackbar.ts';
import type { BusinessMarkerData } from '../../../types';

type MapProps = {
  coords: {
    lat: number;
    lng: number;
    zoom: number;
  };
  filters: string;
}

const Map: FC<MapProps> = ({ coords, filters }) => {
  const [businesses, setBusinesses] = useState<BusinessMarkerData[]>([]);
  const { data, error, query } = useFetch();
  const { showMessage } = useSnackbar();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        console.log('==filters', filters);
        const businessData = await query(`businesses/${filters}`, 'get');
        setBusinesses(businessData);
        console.log('==data for /businesses GET', data);
        console.log('==error for /businesses GET', error);
        return businessData;
      } catch (err) {
        // ! display error to user in future
        console.log(err);
        showMessage(err);
      }
    };

    fetchBusinesses();
  }, [filters]);

  return (
    <MapContainer
      // need unique key every time since MapContainer is not mutable, new zoom and/or center values require new instance
      key={v4()}
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
