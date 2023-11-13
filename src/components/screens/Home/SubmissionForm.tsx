import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { useFetch } from '../../../hooks/useFetch.js';
import axios, { AxiosResponse } from 'axios';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    // ! look at these styles, don't seem to be working
    gap: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const getCoordinatesFromOpenCage = async (address: string) => {
  const apiKey = import.meta.env.VITE_APP_OPEN_CAGE_KEY;
  const response: AxiosResponse = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`,
  );
  return response.data.results[0].geometry;
};

// ! ADD VALIDATION TO FORM FIELDS THAT NEED IT
// ! phone
const SubmissionForm = () => {
  const classes = useStyles();

  const { data, error, query } = useFetch();
  console.log('data', data);
  console.log('error', error);

  const [formFields, setFormFields] = useState({
    // text fields
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
    email: '',
    instagram: '',
    facebook: '',
    x: '',
    website: '',
    // checkboxes
    offers_mugs: null,
    wifi: null,
    work_friendly: null,
    sufficient_outlets: null,
    // text fields
    description: '',
    submitter_name: '',
    submitter_email: '',
    message_to_admin: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('==name', e.target.name);
    console.log('==checked', e.target.checked);
    console.log('==value', e.target.value);
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const address = `${formFields.address1} ${formFields.address2}, ${formFields.city}, ${formFields.state}, ${formFields.country}`;
    const coords = await getCoordinatesFromOpenCage(address);
    const additionalInfoMap = {
      null: null,
      No: false,
      Yes: true,
    };
    const additionalInfo = {
      offers_mugs: additionalInfoMap[formFields.offers_mugs],
      wifi: additionalInfoMap[formFields.wifi],
      work_friendly: additionalInfoMap[formFields.work_friendly],
      sufficient_outlets: additionalInfoMap[formFields.sufficient_outlets],
    };
    const data = await query('businesses', { ...formFields, ...coords, ...additionalInfo });
    console.log('==data', data);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      style={{ width: '33rem' }}
    >
      <Typography variant='h6'>Business Information</Typography>
      <TextField
        name='name'
        label='Business Name'
        variant='outlined'
        required
        onChange={handleChange}
      />
      <TextField
        name='address1'
        label='Address (Street 1)'
        variant='outlined'
        required
        onChange={handleChange}
      />
      <TextField
        name='address2'
        label='Address (Street 2)'
        variant='outlined'
        onChange={handleChange}
      />
      <TextField
        name='city'
        label='City'
        required
        variant='outlined'
        onChange={handleChange}
      />
      <TextField
        name='state'
        label='State/Province/Region'
        required
        variant='outlined'
        onChange={handleChange}
      />
      {/* consider making this a select element */}
      <TextField
        name='country'
        label='Country'
        variant='outlined'
        required
        onChange={handleChange}
      />
      <TextField
        name='zip'
        label='Zip'
        variant='outlined'
        required
        type='number'
        onChange={handleChange}
      />
      <TextField
        name='phone'
        label='Phone'
        variant='outlined'
        type='number'
        onChange={handleChange}
      />
      <TextField
        name='email'
        label='Email'
        variant='outlined'
        type='email'
        onChange={handleChange}
      />
      <Typography
        variant='h6'
        component='div'
      >
        Social Media
      </Typography>
      <TextField
        name='instagram'
        label='Instagram'
        variant='outlined'
        placeholder='@'
        onChange={handleChange}
      />
      <TextField
        name='facebook'
        label='Facebook'
        variant='outlined'
        placeholder='facebook.com/'
        onChange={handleChange}
      />
      <TextField
        name='x'
        label='X'
        variant='outlined'
        placeholder='@'
        onChange={handleChange}
      />
      {/* <TextField
        name='youtube'
        label='Youtube'
        variant='outlined'
        placeholder='youtube.com/
        onChange={handleChange}
      /> */}
      <TextField
        name='website'
        label='Website'
        variant='outlined'
        onChange={handleChange}
      />
      <Typography
        variant='h6'
        component='div'
      >
        Additional Information
      </Typography>

      <FormControl>
        <InputLabel>Offers Mugs?</InputLabel>
        <Select
          value={formFields.offers_mugs}
          onChange={handleChange}
          name='offers_mugs'
        >
          <MenuItem value='Not sure'>Not sure</MenuItem>
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Wifi?</InputLabel>
        <Select
          value={formFields.wifi}
          onChange={handleChange}
          name='wifi'
        >
          <MenuItem value='Not sure'>Not sure</MenuItem>
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Work-friendly?</InputLabel>
        <Select
          value={formFields.work_friendly}
          onChange={handleChange}
          name='work_friendly'
        >
          <MenuItem value='Not sure'>Not sure</MenuItem>
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Sufficient Outlets?</InputLabel>
        <Select
          value={formFields.sufficient_outlets}
          onChange={handleChange}
          name='sufficient_outlets'
        >
          <MenuItem value='Not sure'>Not sure</MenuItem>
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>
      {/* previous inputs */}
      {/* <FormControlLabel
        control={<Checkbox />}
        name='offers'
        label='Offers Mugs?'
        onChange={handleChange}
      />
      <Collapse in={formFields.offers_mugs === false}>
        <FormControlLabel
          control={<Checkbox />}
          name='accepts_personal_mug'
          label='Accepts Personal Mug?'
          onChange={handleChange}
        />
      </Collapse>
      <FormControlLabel
        control={<Checkbox />}
        name='wifi'
        label='WiFi?'
        onChange={handleChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        name='work_friendly'
        label='Work-friendly?'
        onChange={handleChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        name='sufficient_outlets'
        label='Sufficient Outlets'
        onChange={handleChange}
      /> */}
      <TextField
        name='description'
        label='Description'
        variant='outlined'
        multiline
        minRows={4}
        onChange={handleChange}
      />
      <Typography variant='h6'>Submitter Information</Typography>
      <TextField
        name='submitter_name'
        label='Submitter Name'
        variant='outlined'
        required
        onChange={handleChange}
      />
      <TextField
        name='submitter_email'
        label='Submitter Email'
        variant='outlined'
        type='email'
        required
        onChange={handleChange}
      />
      <TextField
        name='message_to_admin'
        label='Message to Admin'
        variant='outlined'
        multiline
        minRows={4}
        onChange={handleChange}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        className={classes.submitButton}
      >
        Submit
      </Button>
    </form>
  );
};

export default SubmissionForm;
