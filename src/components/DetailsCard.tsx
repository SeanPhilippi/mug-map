import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface BusinessData {
  name: string;
  address: string;
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
  businessData: { name, address, website, phone, email, instagram, x, facebook },
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
        >
          {address}
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
          {phone}
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
          Instagram: <a href={`https://www.instagram.com/${instagram}`}>{instagram}</a>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Twitter: <a href={`https://www.twitter.com/${x}`}>{x}</a>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Facebook: <a href={facebook}>{facebook}</a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
