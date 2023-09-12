import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, FormControlLabel, Button, Typography } from '@material-ui/core';
import { useFetch } from '../hooks/useFetch.ts';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

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
    email: '',
    instagram: '',
    facebook: '',
    x: '',
    website: '',
    // checkboxes
    hasMugs: false,
    no_mugs: false,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    query('test', formFields);
  }

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Typography variant='h6'>Business Information</Typography>
      <TextField
        name='name'
        label='Business Name*'
        required
        onChange={handleChange}
      />
      <TextField
        name='address1'
        label='Address (Street 1)*'
        required
        onChange={handleChange}
      />
      <TextField label='Address (Street 2)' />
      <TextField
        name='address2'
        label='City*'
        required
        onChange={handleChange}
      />
      <TextField
        name='country'
        label='Country*'
        required
        onChange={handleChange}
      />
      <TextField
        name='zip'
        label='Zip*'
        required
        onChange={handleChange}
      />
      <TextField
        name='phone'
        label='Phone'
      />
      <TextField
        name='email'
        label='Email'
        type='email'
      />
      <TextField
        name='instagram'
        label='Instagram'
      />
      <TextField
        name='facebook'
        label='Facebook'
      />
      <TextField
        name='x'
        label='X'
      />
      <TextField
        name='Website'
        label='Website'
      />
      <Typography
        variant='h6'
        component='div'
      >
        Additional Information
      </Typography>
      <FormControlLabel
        control={<Checkbox />}
        name='has_mugs'
        label='Has Mugs'
      />
      <FormControlLabel
        control={<Checkbox />}
        name='no_mugs'
        label='No Mugs'
      />
      <FormControlLabel
        control={<Checkbox />}
        name='wifi'
        label='WiFi'
      />
      <FormControlLabel
        control={<Checkbox />}
        name='work_friendly'
        label='Work-friendly'
      />
      <TextField
        name='description'
        label='Description'
        multiline
        rows={4}
      />
      <Typography variant='h6'>Submitter Information</Typography>
      <TextField
        name='submitter_name'
        label='Submitter Name*'
        required
        onChange={handleChange}
      />
      <TextField
        name='submitter_email'
        label='Submitter Email*'
        type='email'
        required
        onChange={handleChange}
      />
      <TextField
        name='message_to_admin'
        label='Message to Admin'
        multiline
        minRows={4}
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
