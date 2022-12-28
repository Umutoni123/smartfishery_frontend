import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import FishPonds from './views/FishPonds';

import Home from './views/Home'
import Locations from './views/Locations';
import Login from './views/Login';
import NotFound from './views/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/smartfisheryplatform">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/fishponds">
          <Dashboard children={<FishPonds />} />
        </Route>
        <Route exact path="/locations">
          <Dashboard children={<Locations />} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
