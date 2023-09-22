import { FC } from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import type { BusinessMarkerData } from '../../../types.js';

interface MarkerCardProps {
  businessMarkerData: BusinessMarkerData;
}

const MarkerCard: FC<MarkerCardProps> = ({
  businessMarkerData: {
    id,
    name,
    offers_mugs,
    wifi,
    work_friendly,
  },
}) => {
  const history = useHistory();

  const handleDetailsClick = () => {
    history.push(`/business/${id}`);
  }

  return (
    <Card>
      <CardContent>
        <Typography
          variant='h5'
          component='div'
        >
          {name}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mb: '8px' }}>
          {offers_mugs && (
            <Chip
              label='Offers Mugs'
              sx={{ borderRadius: '8px' }}
            />
          )}
          {wifi && (
            <Chip
              label='Wifi'
              sx={{ borderRadius: '8px' }}
            />
          )}
          {work_friendly && (
            <Chip
              label='Work-friendly'
              sx={{ borderRadius: '8px' }}
            />
          )}
        </Box>
        <Button
          variant='outlined'
          onClick={handleDetailsClick}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MarkerCard;
