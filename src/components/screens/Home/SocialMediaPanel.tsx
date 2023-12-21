import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, LinkedIn as LinkedInIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  panel: {
    borderRadius: '.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '300px',
    padding: '16px',
  },
});

const SocialMediaPanel: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.panel}>
      <Box
        display='flex'
        justifyContent='center'
      >
        <IconButton>
          <FacebookIcon />
        </IconButton>

        <IconButton>
          <TwitterIcon />
        </IconButton>

        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default SocialMediaPanel;
