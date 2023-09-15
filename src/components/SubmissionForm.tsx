import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, FormControlLabel, Button, Typography } from '@material-ui/core';
import { useFetch } from '../hooks/useFetch.ts';

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

// ! ADD VALIDATION TO FORM FIELDS THAT NEED IT
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
    country: '',
    zip: '',
    phone: '',
    email: '',
    instagram: '',
    facebook: '',
    x: '',
    website: '',
    // checkboxes
    offers_mugs: false,
    wifi: false,
    work_friendly: false,
    // text fields
    description: '',
    submitter_name: '',
    submitter_email: '',
    message_to_admin: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await query('businesses', formFields);
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
      <FormControlLabel
        control={<Checkbox />}
        name='offers'
        label='Offers Mugs'
        onChange={handleChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        name='wifi'
        label='WiFi'
        onChange={handleChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        name='work_friendly'
        label='Work-friendly'
        onChange={handleChange}
      />
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
