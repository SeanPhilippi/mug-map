import React, { useState } from 'react';
import getCoordsFromOpenCage from '../../../utils/getCoordsFromOpenCage';
import { useHistory } from 'react-router-dom';
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
    fontSize: '1.1rem',
    padding: '.8rem',
    flex: 1,
  },
});

const Search: React.FC = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({
    offersMugs: true,
    acceptsPersonalMug: false,
    wifi: true,
    workFriendly: true,
    outlets: true,
  });

  const classes = useStyles();

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const handleSearch = async () => {
    const coords = await getCoordsFromOpenCage(searchText);
    console.log('==Search coords', coords);

    const searchString = `${searchText.split(' ').join('%20')}`;
    const filterString = `${Object.keys(filters)
      .filter(key => filters[key])
      .join('%2C')}`;
    // navigate to MapScreen
    history.push(`/map?s=${searchString}&f=${filterString}`);
  };

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
        justifyContent='space-between'
        p={1}
        borderRadius={10}
        mb={1}
      >
        <FormControlLabel
          control={
            <Checkbox
              name='offersMugs'
              checked={filters.offersMugs}
              onChange={handleFilter}
              style={{ color: 'black', transform: 'scale(1.1)' }}
            />
          }
          label={<Typography className={classes.checkboxLabel}>Offers mugs</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='acceptsPersonalMug'
              checked={filters.acceptsPersonalMug}
              onChange={handleFilter}
              style={{ color: 'black', transform: 'scale(1.1)' }}
            />
          }
          label={<Typography className={classes.checkboxLabel}>Accepts personal mug</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='wifi'
              checked={filters.wifi}
              onChange={handleFilter}
              style={{ color: 'black', transform: 'scale(1.1)' }}
            />
          }
          label={<Typography className={classes.checkboxLabel}>Wi-Fi</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='workFriendly'
              checked={filters.workFriendly}
              onChange={handleFilter}
              style={{ color: 'black', transform: 'scale(1.1)' }}
            />
          }
          label={<Typography className={classes.checkboxLabel}>Work-friendly</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='outlets'
              checked={filters.outlets}
              onChange={handleFilter}
              style={{ color: 'black', transform: 'scale(1.1)' }}
            />
          }
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
          label={<Typography className={classes.searchLabel}>Search the map</Typography>}
          placeholder='Boston, MA or 02131'
          variant='outlined'
          className={classes.searchBar}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={handleSearchText}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.searchBtn}
          onClick={handleSearch}
        >
          Search
        </Button>
        {/* another row of buttons, 'Near Me' and 'World Map' */}
      </Box>
    </Box>
  );
};

export default Search;
