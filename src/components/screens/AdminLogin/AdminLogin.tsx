import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './AdminLogin.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
    backgroundColor: 'white',
    width: '40vw',
  },
  loginBtn: {
    margin: '1rem 0',
  },
  error: {
    color: 'red',
  },
});

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, error, query } = useFetch();
  const history = useHistory();

  const handleLogin = async () => {
    const response = await query('login', 'post', { email, password });
    console.log('==handleLogin', response);
    console.log('==handleLogin data', data);
    history.push('/admin/dashboard');
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box
        component='form'
        display='flex'
        flexDirection='column'
        alignItems='center'
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h2 className={classes.title}>Admin Login</h2>
        {error && <div className={classes.error}>{error}</div>}
        <TextField
          label='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          margin='normal'
        />
        <TextField
          label='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          margin='normal'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.loginBtn}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default AdminLogin;
