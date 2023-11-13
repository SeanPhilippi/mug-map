import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/screens/Home/Home';
import Nav from './components/shared/Nav';
import About from './components/screens/About/About';
import Details from './components/screens/Details/Details';

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
  content: {
    flex: 1,
    overflow: 'auto', // enable scrolling if content overflows
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.appContainer}>
        <Nav />
        <div className={classes.content}>
          <Switch>
            <Route
              exact
              path='/'
            >
              <Home />
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
      </div>
    </Router>
  );
};

export default App;
