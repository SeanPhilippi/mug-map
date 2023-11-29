import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useFetch from '../../../hooks/useFetch.ts';
import { useSnackbar } from '../../../hooks/useSnackbar.ts';

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
  const { query } = useFetch();
  const history = useHistory();
  const { showMessage } = useSnackbar();

  const handleRegister = async () => {
    // ! check password and confirmPassword match
    if (password === confirmPassword) {
      await query('admin/register', 'post', { email, password });
      history.push('/admin/login');
    } else {
      showMessage('Passwords do not match');
    }
  };

  const handleLogin = async () => {
    try {
      await query('admin/login', 'post', { email, password });
      history.push('/admin/dashboard');
    } catch (err) {
      showMessage(err);
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
