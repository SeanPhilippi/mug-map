import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useFetch from '../../../hooks/useFetch.ts';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    color: 'black',
  },
  form: {
    width: '30vw',
    padding: '2rem 3rem',
  },
  textField: {
    width: '100%',
  },
  loginBtn: {
    margin: '1rem 0',
  },
  error: {
    color: 'red',
  },
});

interface AdminScreenProps {
  screen: string;
}

const AdminScreen: React.FC<AdminScreenProps> = ({ screen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { data, error, query } = useFetch();
  const history = useHistory();

  const handleRegister = async () => {
    // ! check password and confirmPassword match
    if (password === confirmPassword) {
      try {
        const response = await query('admin/register', 'post', { email, password });
        console.log('==handleRegister', response);
        // ! look at data and error coming from useFetch later
        // ! they always come back as null upon first render after api call
        // ! should consider scrapping them in return from useFetch
        console.log('==handleRegister data', data);
        console.log('==ERROR after registeration', error);
        console.log('==DATA after registeration', data);
        history.push('/admin/login');
      } catch (err) {
        // ! show error snackbar about why register failed
        console.log('==error trying to register:', err);
      }
    } else {
      // ! show error snackbar about passwords not matching
      console.log('==register error: passwords do not match');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await query('admin/login', 'post', { email, password });
      console.log('==handleLogin', response);
      console.log('==handleLogin data', data);
      history.push('/admin/dashboard');
    } catch (err) {
      // ! show login error snackbar
      console.log('==handleLogin error:', err);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card variant='outlined'>
        <Box
          component='form'
          display='flex'
          flexDirection='column'
          alignItems='center'
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
            if (screen === 'login') {
              handleLogin();
            } else if (screen === 'register') {
              handleRegister();
            }
          }}
        >
          <h2 className={classes.title}>Admin {`${screen[0].toUpperCase()}${screen.substring(1)}`}</h2>
          {error && <div className={classes.error}>{error}</div>}
          <TextField
            label='email'
            type='email'
            className={classes.textField}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            margin='normal'
          />
          <TextField
            label='password'
            type='password'
            className={classes.textField}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            margin='normal'
          />
          {screen === 'register' && (
            <TextField
              label='confirm password'
              type='password'
              className={classes.textField}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              margin='normal'
            />
          )}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.loginBtn}
          >
            {`${screen[0].toUpperCase()}${screen.substring(1)}`}
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default AdminScreen;
