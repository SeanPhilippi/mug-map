import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Address = {
  street1: string;
  street2: string;
  country: string;
  city: string;
  state: string;
  zip: string;
};

interface BusinessData {
  name: string;
  address: Address;
  website: string;
  phone: string;
  email: string;
  instagram: string;
  x: string;
  facebook: string;
}

interface DetailsCardProps {
  businessData: BusinessData;
}

const DetailsCard: FC<DetailsCardProps> = ({
  businessData: {
    name,
    address: { street1, street2, city, country, state, zip },
    website,
    phone,
    email,
    instagram,
    x,
    facebook,
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
        <Typography
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
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
