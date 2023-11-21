import { FC } from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import type { BusinessMarkerData } from '../../../types.ts';

interface MarkerCardProps {
  businessMarkerData: BusinessMarkerData;
}

const MarkerCard: FC<MarkerCardProps> = ({
  businessMarkerData: { id, name, offers_mugs, wifi, work_friendly, sufficient_outlets, accepts_personal_mug },
}) => {
  const history = useHistory();

  const handleDetailsClick = () => {
    history.push(`/business/${id}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography
          variant='h5'
          component='div'
        >
          {name}
        </Typography>
        <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
          {/* offers_mugs could be n/a?  */}
          {offers_mugs && (
            <Chip
              label='Offers Mugs'
              style={{ borderRadius: '8px' }}
            />
          )}
          {accepts_personal_mug && (
            <Chip
              label='Accepts Personal Mug'
              style={{ borderRadius: '8px' }}
            />
          )}
          {wifi && (
            <Chip
              label='Wifi'
              style={{ borderRadius: '8px' }}
            />
          )}
          {work_friendly && (
            <Chip
              label='Work-friendly'
              style={{ borderRadius: '8px' }}
            />
          )}
          {sufficient_outlets && (
            <Chip
              label='Sufficient Outlets'
              style={{ borderRadius: '8px' }}
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
