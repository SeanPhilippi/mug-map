import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  searchContainer: {
    borderRadius: '10px',
  },
  checkboxLabel: {
    color: 'black',
    fontSize: '1.3rem',
  },
  searchBar: {
    marginRight: '1.5rem',
    width: '85%',
  },
  searchLabel: {
    color: 'black',
    lineHeight: '1rem',
  },
  notchedOutline: {
    color: 'black !important',
    borderColor: 'black !important',
  },
  searchBtn: {
    fontSize: '1.2rem',
  },
});

const Search: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='100%'
      p={2}
      bgcolor='rgba(255, 255, 255, 0.5)'
      className={classes.searchContainer}
    >
      <Box
        width='100%'
        display='flex'
        p={1}
        borderRadius={10}
        mb={2}
      >
        <FormControlLabel
          control={<Checkbox style={{ color: 'black', transform: 'scale(1.1)' }} />}
          label={<Typography className={classes.checkboxLabel}>Offers mugs</Typography>}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: 'black', transform: 'scale(1.1)' }} />}
          label={<Typography className={classes.checkboxLabel}>Accepts personal mug</Typography>}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: 'black', transform: 'scale(1.1)' }} />}
          label={<Typography className={classes.checkboxLabel}>Wi-Fi</Typography>}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: 'black', transform: 'scale(1.1)' }} />}
          label={<Typography className={classes.checkboxLabel}>Work-friendly</Typography>}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: 'black', transform: 'scale(1.1)' }} />}
          label={<Typography className={classes.checkboxLabel}>Outlets</Typography>}
        />
      </Box>
      <Box
        width='100%'
        display='flex'
        alignItems='center'
        p={1}
        borderRadius={10}
      >
        <TextField
          label={<Typography className={classes.searchLabel}>Search</Typography>}
          variant='outlined'
          className={classes.searchBar}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.searchBtn}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
