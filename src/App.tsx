import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/screens/Home/Home';
import Nav from './components/shared/Nav';
import About from './components/screens/About/About';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
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
      </Switch>
    </Router>
  );
};

export default App;
