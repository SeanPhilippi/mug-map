import React, { useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../../hooks/useFetch.ts';
import getCoordsFromOpenCage from '../../../utils/getCoordsFromOpenCage.ts';
import type { BusinessData } from '../../../types.ts';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    // ! look at these styles, don't seem to be working
    gap: theme.spacing(2),
  },
  updateButton: {
    marginTop: theme.spacing(2),
  },
}));

interface UpdateFormProps {
  business: BusinessData;
  businessId: number;
  handleClose: () => void;
  fetchBusinessData: () => void;
}

// ! ADD VALIDATION TO FORM FIELDS THAT NEED IT
// ! phone
const UpdateForm: FC<UpdateFormProps> = ({ business, businessId, handleClose, fetchBusinessData }) => {
  const classes = useStyles();

  const { data, error, query } = useFetch();
  console.log('data', data);
  console.log('error', error);

  const [formFields, setFormFields] = useState({
    // text fields
    name: business.name,
    address: business.address,
    phone: business.phone,
    email: business.email,
    instagram: business.instagram,
    facebook: business.facebook,
    x: business.x,
    website: business.website,
    // selects
    offers_mugs: business.offers_mugs !== null ? business.offers_mugs.toString() : 'notSure',
    accepts_personal_mug: business.accepts_personal_mug !== null ? business.accepts_personal_mug.toString() : 'notSure',
    wifi: business.wifi !== null ? business.wifi.toString() : 'notSure',
    sufficient_outlets: business.sufficient_outlets !== null ? business.sufficient_outlets.toString() : 'notSure',
    // text fields
    description: business.description,
    // not populated w previous data, because user does not need to know past values and
    // needs to enter their own details
    submitter_name: '',
    submitter_email: '',
    message_to_admin: '',
  });

  const isValidPhoneNumber = phoneNumber => {
    // Allow optional country code
    let formatted = phoneNumber.replace(/^\+/, '');

    // Add dashes between blocks
    formatted = formatted.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    return formatted.match(/^\d{3}-\d{3}-\d{4}$/);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('==name', e.target.name);
    // console.log('==checked', e.target.checked);
    // console.log('==value', e.target.value);
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'phone') {
      if (isValidPhoneNumber(value)) {
        value = isValidPhoneNumber(value);
      } else {
        // ! set error state
      }
    }
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const coords = await getCoordsFromOpenCage(formFields.address);
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
    const data = await query(`businesses/${businessId}`, 'put', { ...formFields, ...coords, ...additionalInfo });
    console.log('==data', data);
    // ! check data for error, if error show message to user
    await fetchBusinessData();
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
        value={formFields.name}
        label='Business Name'
        variant='outlined'
        required
        onChange={handleChange}
      />
      <TextField
        name='address'
        value={formFields.address}
        label='Address (full)'
        variant='outlined'
        required
        onChange={handleChange}
      />
      {/* ! add auto-formatting to d-ddd-ddd-dddd format and only allow number input */}
      {/* allow pasting of numbers but strip non-digit characters like '+' */}
      <TextField
        name='phone'
        value={formFields.phone}
        label='Phone'
        variant='outlined'
        type='number'
        error={!isValidPhoneNumber(formFields.phone)}
        helperText={!isValidPhoneNumber(formFields.phone) ? 'Invalid phone number' : ''}
        onChange={handleChange}
      />
      <TextField
        name='email'
        value={formFields.email}
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
        value={formFields.instagram}
        label='Instagram'
        variant='outlined'
        placeholder='@'
        onChange={handleChange}
      />
      <TextField
        name='facebook'
        value={formFields.facebook}
        label='Facebook'
        variant='outlined'
        placeholder='facebook.com/'
        onChange={handleChange}
      />
      <TextField
        name='x'
        value={formFields.x}
        label='X'
        variant='outlined'
        placeholder='@'
        onChange={handleChange}
      />
      {/* <TextField
        name='youtube'
        value={formFields.youtube}
        label='Youtube'
        variant='outlined'
        placeholder='youtube.com/
        onChange={handleChange}
      /> */}
      <TextField
        name='website'
        value={formFields.website}
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
      {/* maybe incorporate voting up / down thumbs here */}
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
        value={formFields.description}
        label='Description'
        variant='outlined'
        multiline
        minRows={4}
        onChange={handleChange}
      />
      <Typography variant='h6'>Submitter Information</Typography>
      {/* this info does not get a default value from previous data for obvious reasons */}
      {/* ! style required feields using red */}
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
        className={classes.updateButton}
      >
        Update
      </Button>
    </form>
  );
};

export default UpdateForm;
