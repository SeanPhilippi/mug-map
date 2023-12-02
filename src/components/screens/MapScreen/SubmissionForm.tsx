import React, { useState, FC } from 'react';
import getCoordsFromOpenCage from '../../../utils/getCoordsFromOpenCage.ts';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../../hooks/useFetch.ts';

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

interface SubmissionFormProps {
  handleClose: () => void;
}

// ! ADD VALIDATION TO FORM FIELDS THAT NEED IT
// ! phone
const SubmissionForm: FC<SubmissionFormProps> = ({ handleClose }) => {
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
    // selects
    offers_mugs: 'notSure',
    accepts_personal_mug: 'notSure',
    wifi: 'notSure',
    sufficient_outlets: 'notSure',
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
    const coords = await getCoordsFromOpenCage(address);
    console.log('==formFields', formFields);
    console.log('==coords', coords);
    const additionalInfoMap = {
      notSure: null,
      no: false,
      yes: true,
    };
    const additionalInfo = {
      offers_mugs: additionalInfoMap[formFields.offers_mugs],
      accepts_personal_mug: additionalInfoMap[formFields.accepts_personal_mug],
      wifi: additionalInfoMap[formFields.wifi],
      sufficient_outlets: additionalInfoMap[formFields.sufficient_outlets],
    };
    console.log('==additionalInfo', additionalInfo);
    const data = await query('businesses', 'post', { ...formFields, ...coords, ...additionalInfo });
    console.log('==data', data);
    handleClose();
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
      {/* ! add auto-formatting to d-ddd-ddd-dddd format and only allow number input */}
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
          <MenuItem value='notSure'>Not sure</MenuItem>
          <MenuItem value='yes'>Yes</MenuItem>
          <MenuItem value='no'>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Accepts Personal Mug?</InputLabel>
        <Select
          value={formFields.accepts_personal_mug}
          onChange={handleChange}
          name='accepts_personal_mug'
        >
          <MenuItem value='notSure'>Not sure</MenuItem>
          <MenuItem value='yes'>Yes</MenuItem>
          <MenuItem value='no'>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Wifi?</InputLabel>
        <Select
          value={formFields.wifi}
          onChange={handleChange}
          name='wifi'
        >
          <MenuItem value='notSure'>Not sure</MenuItem>
          <MenuItem value='yes'>Yes</MenuItem>
          <MenuItem value='no'>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Sufficient Outlets?</InputLabel>
        <Select
          value={formFields.sufficient_outlets}
          onChange={handleChange}
          name='sufficient_outlets'
        >
          <MenuItem value='notSure'>Not sure</MenuItem>
          <MenuItem value='yes'>Yes</MenuItem>
          <MenuItem value='no'>No</MenuItem>
        </Select>
      </FormControl>
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
