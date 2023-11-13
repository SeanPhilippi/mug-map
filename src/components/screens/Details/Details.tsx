import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Language as WebsiteIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useFetch } from '../../../hooks/useFetch.js';
import type { BusinessData } from '../../../types.js';

interface DetailsParams {
  id: string;
}

const useStyles = makeStyles({
  detailsPage: {
  }
});

const Details: FC = () => {
  const { id } = useParams<DetailsParams>();
  const history = useHistory();

  const [business, setBusinessData] = useState<BusinessData>(null);

  const { data, error, query } = useFetch();

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const businessData = await query(`/business/${id}`);
        setBusinessData(businessData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBusinessData();
  }, []);

  const handleGoBack = () => {
    history.goBack(); // Go back to the previous screen
  };
  console.log('==data for /businesses/:id GET', data);
  console.log('==error for /businesses/:id GET', error);

  const classes = useStyles();

  return (
    business && (
      <div className={classes.detailsPage}>
        <Typography variant='h4'>Business Details</Typography>

        <Typography variant='h6'>Location:</Typography>
        <Typography>{business.name}</Typography>
        <Typography>{business.address1}</Typography>
        <Typography>{business.address2}</Typography>
        <Typography>{business.city}</Typography>
        <Typography>{business.state}</Typography>
        <Typography>{business.country}</Typography>
        <Typography>{business.zip}</Typography>

        <Typography variant='h6'>Contact:</Typography>
        <Typography>{business.phone}</Typography>
        <Typography>{business.email}</Typography>
        <Typography>{business.instagram}</Typography>
        <Typography>{business.facebook}</Typography>

        <Typography variant='h6'>Social Media:</Typography>
        {business.website && (
          <Link
            href={business.website}
            target='_blank'
            rel='noreferrer'
          >
            <WebsiteIcon /> {business.website}
          </Link>
        )}
        {business.x && (
          <Link
            href={`https://x.com/${business.x}`}
            target='_blank'
            rel='noreferrer'
          >
            <TwitterIcon /> {business.x}
          </Link>
        )}
        {business.facebook && (
          <Link
            href={business.facebook}
            target='_blank'
            rel='noreferrer'
          >
            <FacebookIcon /> {business.facebook}
          </Link>
        )}
        {business.instagram && (
          <Link
            href={`https://instagram.com/${business.instagram}`}
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon /> {business.instagram}
          </Link>
        )}

        <Typography variant='h6'>Features:</Typography>
        <Typography>Offers Mugs: {business.offers_mugs ? 'Yes' : 'No'}</Typography>
        <Typography>Wifi: {business.wifi ? 'Yes' : 'No'}</Typography>
        <Typography>Work Friendly: {business.work_friendly ? 'Yes' : 'No'}</Typography>

        <Typography variant='h6'>Description:</Typography>
        <Typography>{business?.description}</Typography>

        <Button
          variant='contained'
          onClick={handleGoBack}
        >
          Go Back
        </Button>
      </div>
    )
  );
};

export default Details;
