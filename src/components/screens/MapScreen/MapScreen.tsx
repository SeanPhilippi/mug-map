import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SubmissionForm from './SubmissionForm';
import getCoordsFromOpenCage from '../../../utils/getCoordsFromOpenCage';

const useStyles = makeStyles({
  mapContainer: {
    paddingTop: '84px', // height of the Nav component
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden', // keeps Map component from spilling out of parent container if it's bigger, clips it
  },
  submitButton: {
    marginTop: '2rem',
    marginBottom: '2rem',
    margin: 'auto',
    flex: 1,
  },
});

const MapScreen = () => {
  // including zoom in coords obj to reduce renders for Map
  const [coords, setCoords] = useState({ lat: 0, lng: 0, zoom: 3 });
  const [filters, setFilters] = useState('');
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getCoordsFromUrl = async () => {
    console.log('location', location);
    console.log('location.search', location.search);
    if (location.search.length) {
      const searchParams = new URLSearchParams(location.search);
      const searchText = searchParams.get('s');
      console.log('searchText', searchText);
      const filters = searchParams.get('f');
      console.log('filters', filters);
      const coordsFromQuery = await getCoordsFromOpenCage(searchText);
      console.log('coordsFromQuery', coordsFromQuery);
      // set zoom to be changed in MapContainer
      coordsFromQuery.zoom = 13;
      setCoords(coordsFromQuery);
      if (filters.length) {
        setFilters(filters);
      }
    } else if (location.pathname.includes('/near-me')) {
      // get user's coordinates
      navigator.geolocation.getCurrentPosition(
        position => {
          setCoords({ lat: position.coords.latitude, lng: position.coords.longitude, zoom: 13 });
        },
        err => {
          // ! show error message in a snackbar
          console.log('error', err);
        },
      );
    } else {
      // give default view because url is /map without search and filter url params
      setCoords({ lat: 0, lng: 0, zoom: 3 });
      setFilters('');
    }
  };

  useEffect(() => {
    // on mount, get url params search data
    // if it doesn't exist, show global view by using default values
    getCoordsFromUrl();
  }, [location]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <Map
        coords={coords}
        filters={filters}
      />
      <Button
        className={classes.submitButton}
        variant='outlined'
        color='primary'
        onClick={handleClickOpen}
      >
        Make a Submission
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            Submission Form
            <IconButton
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <SubmissionForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapScreen;
