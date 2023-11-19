import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchContainer: {
    borderRadius: '10px',
  },
  filterOption: {
    color: 'black',
  },
  searchBar: {
    marginRight: '1.5rem',
    width: '85%',
  }
});

const Search = () => {
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
          className={classes.filterOption}
          control={<Checkbox />}
          label='Offers mugs'
        />
        <FormControlLabel
          className={classes.filterOption}
          control={<Checkbox />}
          label='Accepts personal mug'
        />
        <FormControlLabel
          className={classes.filterOption}
          control={<Checkbox />}
          label='Wi-Fi'
        />
        <FormControlLabel
          className={classes.filterOption}
          control={<Checkbox />}
          label='Work-friendly'
        />
        <FormControlLabel
          className={classes.filterOption}
          control={<Checkbox />}
          label='Outlets'
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
          label='Search'
          variant='outlined'
          className={classes.searchBar}
        />
        <Button
          variant='contained'
          color='primary'
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
