import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  panel: {
    borderRadius: '.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '250px',
    padding: '16px',
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    zIndex: 1,
  },
});

const CopyrightPanel: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.panel}>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Typography>© 2023 PPBoys Ltd. | Github</Typography>
        <Typography>Photo by Luke Chesser</Typography>
      </Box>
    </Paper>
  );
};

export default CopyrightPanel;

