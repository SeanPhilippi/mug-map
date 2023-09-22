import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useFetch } from '../../../hooks/useFetch.js';
import type { BusinessData } from '../../../types.js';

interface DetailsParams {
  id: string;
}

const Details: FC = () => {
  const { id } = useParams<DetailsParams>();
  const history = useHistory();

  const [business, setBusinessData] = useState<BusinessData>(null);

  const { data, error, query } = useFetch();

  useEffect(() => {
    console.log('==mounting Details');
    const fetchBusinessData = async () => {
      console.log('1');
      try {
        const businessData = await query(`/business/${id}`);
        console.log('2');
        setBusinessData(businessData);
        console.log('3');
        console.log('==data for /businesses/:id GET', data);
        console.log('==error for /businesses/:id GET', error);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBusinessData();
  }, []);

  const handleGoBack = () => {
    history.goBack(); // Go back to the previous screen
  };
  console.log('==rendering Details');

  return (
    <div>
      <Typography variant='h4'>Business Details</Typography>
      <Typography variant='h6'>ID: {id}</Typography>

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
      <Typography>{business.website}</Typography>

      <Typography variant='h6'>Features:</Typography>
      <Typography>Offers Mugs: {business.offers_mugs ? 'Yes' : 'No'}</Typography>
      <Typography>Wifi: {business.wifi ? 'Yes' : 'No'}</Typography>
      <Typography>Work Friendly: {business.work_friendly ? 'Yes' : 'No'}</Typography>

      <Typography variant='h6'>Description:</Typography>
      <Typography>{business.description}</Typography>

      <Typography variant='h6'>Submitter Info:</Typography>
      <Typography>{business.submitter_name}</Typography>
      <Typography>{business.submitter_email}</Typography>

      <Typography variant='h6'>Message to Admin:</Typography>
      <Typography>{business.message_to_admin}</Typography>

      <Button
        variant='contained'
        onClick={handleGoBack}
      >
        Go Back
      </Button>
    </div>
  );
};

export default Details;
