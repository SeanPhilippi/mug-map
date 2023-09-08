import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, FormControlLabel, Button, Typography } from '@material-ui/core';

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

function SubmissionForm() {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Typography variant='h6'>Business Information</Typography>
      <TextField
        label='Business Name*'
        required
      />
      <TextField
        label='Address (Street 1)*'
        required
      />
      <TextField label='Address (Street 2)' />
      <TextField
        label='City*'
        required
      />
      <TextField
        label='Country*'
        required
      />
      <TextField
        label='ZIP*'
        required
      />
      <TextField label='Phone' />
      <TextField
        label='Email'
        type='email'
      />
      <TextField label='Instagram' />
      <TextField label='Facebook' />
      <TextField label='X' />
      <TextField label='Website' />
      <Typography
        variant='h6'
        component='div'
      >
        Additional Information
      </Typography>
      <FormControlLabel
        control={<Checkbox />}
        label='Has Mugs'
      />
      <FormControlLabel
        control={<Checkbox />}
        label='No Mugs'
      />
      <FormControlLabel
        control={<Checkbox />}
        label='WiFi'
      />
      <FormControlLabel
        control={<Checkbox />}
        label='Work-friendly'
      />
      <TextField
        label='Description'
        multiline
        rows={4}
      />
      <Typography variant='h6'>Submitter Information</Typography>
      <TextField
        label='Submitter Name*'
        required
      />
      <TextField
        label='Submitter Email*'
        type='email'
        required
      />
      <TextField
        label='Message to Admin'
        multiline
        rows={4}
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
}

export default SubmissionForm;
