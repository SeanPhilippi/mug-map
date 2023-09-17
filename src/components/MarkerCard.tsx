import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { BusinessMarkerData } from '../types.d.ts';

interface MarkerCardProps {
  businessMarkerData: BusinessMarkerData;
}

const MarkerCard: FC<MarkerCardProps> = ({
  businessMarkerData: {
    name,
    // has_mugs,
    // wifi,
    // work_friendly,
    // coords: {
    //   lat,
    //   lng,
    // }
  },
}) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography
          variant='h5'
          component='div'
        >
          {name}
        </Typography>
        {/* <Typography
          variant='body2'
          color='text.secondary'
          sx={{ lineHeight: '.5' }}
        >
          {`${street1}${street2 ? `, ${street2}` : ''}`}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ lineHeight: '.5' }}
        >
          {`${city}, ${state}`}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ lineHeight: '.5' }}
        >
          {`${country} ${zip}`}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Website: <a href={website}>{website}</a>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Phone: {phone}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Email: <a href={`mailto:${email}`}>{email}</a>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Instagram: <a href={`https://www.instagram.com/${instagram}`}>@{instagram}</a>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          X: <a href={`https://www.x.com/${x}`}>@{x}</a>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Facebook: <a href={`https://www.facebook.com/${facebook}`}>{facebook}</a>
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default MarkerCard;
