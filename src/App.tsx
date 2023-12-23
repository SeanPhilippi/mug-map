import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/screens/Home/Home';
import MapScreen from './components/screens/MapScreen/MapScreen';
import Nav from './components/shared/Nav';
import About from './components/screens/About/About';
import Details from './components/screens/Details/Details';
import AdminScreen from './components/screens/AdminScreen/AdminScreen';
import AdminPortal from './components/screens/AdminPortal/AdminPortal';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from './utils/snackbarContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#784a1e',
    },
    // secondary: {
    //   main: '#080606',
    // },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
    },
    caption: {
      fontFamily: 'Lato, sans-serif',
    },
    button: {
      fontFamily: 'Lato, sans-serif',
      textTransform: 'none', // Set the button text to not be transformed
    },
  },
});

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
  content: {
    display: 'flex',
    flex: 1,
    overflow: 'auto', // enable scrolling if content overflows
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Router>
          <div className={classes.appContainer}>
            <Nav />
            <Switch>
              <Route
                exact
                path='/'
              >
                <Home />
              </Route>
              <Route
                // exact
                path='/map'
              >
                <MapScreen />
              </Route>
              <Route
                exact
                path='/admin/register'
              >
                <AdminScreen screen='register' />
              </Route>
              <Route
                exact
                path='/admin/login'
              >
                <AdminScreen screen='login' />
              </Route>
              <Route
                exact
                path='/admin/portal'
              >
                <AdminPortal />
              </Route>
              <Route
                exact
                path='/about'
              >
                <About />
              </Route>
              <Route
                exact
                path='/business/:id'
              >
                <Details />
              </Route>
            </Switch>
          </div>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
