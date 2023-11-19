import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  splashContainer: {
    // height: '100vh',
    position: 'relative',
    width: '100%',
    backgroundImage: 'url("/cafe.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    width: '60%',
  },
  text: {
    // fontFamily:
    fontSize: '2rem',
    fontWeight: 'bold',
    lineHeight: '2.1rem',
  },
  text2: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
});

const Splash = () => {
  const classes = useStyles();

  return (
    <div className={classes.splashContainer}>
      <div className={classes.overlay}>
        <div className={classes.mainContent}>
          <p className={classes.text}>
            Ditch the disposable
            <br />
            Cozy up with ceramic
          </p>
          <p className={classes.text2}>
            Discover cafés that care for their craft <i>and</i> the environment.
          </p>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Splash;
