import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  appBar: {
    padding: '10px',
    position: 'sticky',
    top: 0,
  },
  title: {
    'position': 'absolute',
    'left': '50%',
    'transform': 'translateX(-50%)',
    'color': 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    'marginRight': '2rem',
    'color': 'rgba(255, 255, 255, 0.8)',
    'transition': 'color 0.3s ease',
    '&:hover': {
      color: 'rgba(255, 255, 255, 1)',
    },
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const navigateHome = () => {
    if (location.pathname !== '/') {
      history.push('/');
    }
  }

  const cursorStyle = {
    cursor: location.pathname === '/' ? 'default' : 'pointer',
  }

  return (
    <AppBar
      position='static'
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h6'
          className={classes.title}
          style={cursorStyle}
          onClick={navigateHome}
        >
          Mug Map
        </Typography>
        <Link
          to='/'
          className={classes.link}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={classes.link}
        >
          About
        </Link>
        {/* Add navigation and other components here */}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;