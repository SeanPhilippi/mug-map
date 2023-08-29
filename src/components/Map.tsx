import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '80vh', width: '100vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_APP_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={10.99835}
          lng={77.015026}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
