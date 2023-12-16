import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Language as WebsiteIcon,
  FileCopy as CopyIcon,
} from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import UpdateForm from './UpdateForm';
import useFetch from '../../../hooks/useFetch.ts';
import type { BusinessData } from '../../../types.ts';

interface DetailsParams {
  id: string;
}

const useStyles = makeStyles({
  detailsContainer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '84px', // height of the Nav component
  },
  button: {
    width: '10rem',
  },
  iconStyle: {
    marginRight: '.5rem',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: '2rem 0',
    width: '40vw',
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  paragraph: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  field: {
    'display': 'flex',
    'alignItems': 'center',
    '&:hover': {
      '& $copyButton': {
        opacity: 1,
      },
    },
  },
  copyButton: {
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  subLabel: {
    fontWeight: 'bold',
    marginRight: '.5rem',
  },
  footerButtons: {
    margin: '2rem auto',
  },
});

const Details: FC = () => {
  const { id } = useParams<DetailsParams>();
  const history = useHistory();

  const [business, setBusinessData] = useState<BusinessData>(null);

  const { data, error, query } = useFetch();

  const fetchBusinessData = async () => {
    try {
      const businessData = await query(`/businesses/${id}`, 'get');
      setBusinessData(businessData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch business data using param id upon mount
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

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    // add snackbar
  };

  const classes = useStyles();
  console.log('==data for /businesses/:id GET', data);
  console.log('==error for /businesses/:id GET', error);

  return (
    business && (
      <div className={classes.detailsContainer}>
        <Card
          variant='outlined'
          className={classes.card}
        >
          <CardContent className={classes.cardContent}>
            <Typography variant='h4'>{business.name}</Typography>
            <p className={classes.paragraph}>
              <Typography variant='h6'>Location:</Typography>
              <div className={classes.field}>
                <Typography>{business.address}</Typography>
                <Tooltip title='Copy address'>
                  <IconButton
                    className={classes.copyButton}
                    onClick={() => copyToClipboard(business.address)}
                  >
                    <CopyIcon fontSize='small' />
                  </IconButton>
                </Tooltip>
              </div>
            </p>

            <p className={classes.paragraph}>
              <Typography variant='h6'>Contact:</Typography>
              <div className={classes.field}>
                <Typography className={classes.subLabel}>Phone:</Typography>
                <Typography>{business.phone}</Typography>
                <Tooltip title='Copy phone'>
                  <IconButton
                    className={classes.copyButton}
                    onClick={() => copyToClipboard(business.phone)}
                  >
                    <CopyIcon fontSize='small' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className={classes.field}>
                <Typography className={classes.subLabel}>Email:</Typography>
                <Typography>{business.email}</Typography>
                <Tooltip title='Copy email'>
                  <IconButton
                    className={classes.copyButton}
                    onClick={() => copyToClipboard(business.email)}
                  >
                    <CopyIcon fontSize='small' />
                  </IconButton>
                </Tooltip>
              </div>
            </p>

            <p className={classes.paragraph}>
              <Typography variant='h6'>Social Media:</Typography>
              {business.website && (
                <Link
                  href={business.website}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}
                >
                  <WebsiteIcon className={classes.iconStyle} />
                  <span>{business.website}</span>
                </Link>
              )}
              {business.x && (
                <Link
                  href={`https://x.com/${business.x}`}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}
                >
                  <div>
                    <TwitterIcon className={classes.iconStyle} />
                    <span>{business.x}</span>
                  </div>
                </Link>
              )}
              {business.facebook && (
                <Link
                  href={business.facebook}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}
                >
                  <FacebookIcon className={classes.iconStyle} />
                  <span>{business.facebook}</span>
                </Link>
              )}
              {business.instagram && (
                <Link
                  href={`https://instagram.com/${business.instagram}`}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}
                >
                  <InstagramIcon className={classes.iconStyle} />
                  <span>{business.instagram}</span>
                </Link>
              )}
            </p>

            <p className={classes.paragraph}>
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
                Sufficient Outlets:{' '}
                {business.sufficient_outlets === null ? 'N/A' : business.sufficient_outlets ? 'Yes' : 'No'}
              </Typography>
            </p>

            <p className={classes.paragraph}>
              <Typography variant='h6'>Description:</Typography>
              <Typography>{business?.description}</Typography>
            </p>

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
                    <UpdateForm
                      business={business}
                      businessId={id}
                      handleClose={handleCloseUpdateForm}
                      fetchBusinessData={fetchBusinessData}
                    />
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    )
  );
};

export default Details;
