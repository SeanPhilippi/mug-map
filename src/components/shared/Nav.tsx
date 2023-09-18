import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    marginBottom: '20px',
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  link: {
    marginRight: '2rem',
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar
      position='static'
      className={classes.appBar}
    >
      <Toolbar>
        <Typography
          variant='h6'
          className={classes.title}
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
