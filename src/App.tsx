import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Map from './components/Map';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SubmissionForm from './components/SubmissionForm';

const useStyles = makeStyles({
  submitButton: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
      </div>
      <div style={{ fontSize: '32px', padding: '1rem' }}>Mug Map</div>
      <Map />
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
          <SubmissionForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default App;
