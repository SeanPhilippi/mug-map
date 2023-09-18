import { FC } from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { BusinessMarkerData } from '../../../types.js';

interface MarkerCardProps {
  businessMarkerData: BusinessMarkerData;
}

const MarkerCard: FC<MarkerCardProps> = ({
  businessMarkerData: {
    name,
    offers_mugs,
    wifi,
    work_friendly,
  },
}) => {
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
          onClick={() => null}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MarkerCard;
