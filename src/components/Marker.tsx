import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

type MarkerProps = {
  lat: number;
  lng: number;
};

const Marker: FC<MarkerProps> = () => {
  return (
    <FontAwesomeIcon
      color='#5de600'
      size='2x'
      icon={faMapMarkerAlt}
    />
  );
};

export default Marker;
