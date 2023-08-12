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
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.REACT_APP_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
