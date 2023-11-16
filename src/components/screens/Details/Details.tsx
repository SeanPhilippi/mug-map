import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Language as WebsiteIcon,
} from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import UpdateForm from './UpdateForm';
import { useFetch } from '../../../hooks/useFetch.js';
import type { BusinessData } from '../../../types.js';

interface DetailsParams {
  id: string;
}

const useStyles = makeStyles({
  detailsPage: {},
  footerButtons: {
    margin: '5rem auto',
  },
  button: {
    // flex: 1,
    width: '10rem',
  },
});

const Details: FC = () => {
  const { id } = useParams<DetailsParams>();
  const history = useHistory();

  const [business, setBusinessData] = useState<BusinessData>(null);

  const { data, error, query } = useFetch();

  useEffect(() => {
    // fetch business data using param id upon mount
    const fetchBusinessData = async () => {
      try {
        const businessData = await query(`/business/${id}`, 'get');
        setBusinessData(businessData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBusinessData();
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpenUpdateForm = () => {
    setOpen(true);
  };

  const handleCloseUpdateForm = () => {
    setOpen(false);
  };

  const handleGoBack = () => {
    history.goBack(); // Go back to the previous screen
  };
  console.log('==data for /businesses/:id GET', data);
  console.log('==error for /businesses/:id GET', error);

  const classes = useStyles();

  return (
    business && (
      <Card>
        <CardContent>
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
          <Typography>
            Offers Mugs: {business.offers_mugs === null ? 'N/A' : business.offers_mugs ? 'Yes' : 'No'}
          </Typography>
          <Typography>
            Accepts Personal Mug:{' '}
            {business.accepts_personal_mug === null ? 'N/A' : business.accepts_personal_mug ? 'Yes' : 'No'}
          </Typography>
          <Typography>Wifi: {business.wifi === null ? 'N/A' : business.wifi ? 'Yes' : 'No'}</Typography>
          <Typography>
            Work Friendly: {business.work_friendly === null ? 'N/A' : business.work_friendly ? 'Yes' : 'No'}
          </Typography>
          <Typography>
            Sufficient Outlets:{' '}
            {business.sufficient_outlets === null ? 'N/A' : business.sufficient_outlets ? 'Yes' : 'No'}
          </Typography>

          <Typography variant='h6'>Description:</Typography>
          <Typography>{business?.description}</Typography>

          <Grid
            container
            spacing={3}
            justifyContent='center'
            className={classes.footerButtons}
          >
            <Grid item>
              <Button
                variant='contained'
                onClick={handleGoBack}
                className={classes.button}
              >
                Go Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                onClick={handleOpenUpdateForm}
                className={classes.button}
              >
                Update Listing
              </Button>
              <Dialog
                open={open}
                onClose={handleCloseUpdateForm}
                aria-labelledby='form-dialog-title'
              >
                <DialogTitle id='form-dialog-title'>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    Submission Form
                    <IconButton
                      color='inherit'
                      onClick={handleCloseUpdateForm}
                      aria-label='close'
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </DialogTitle>
                <DialogContent>
                  <UpdateForm business={business} businessId={id} handleClose={handleCloseUpdateForm} />
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  );
};

export default Details;
