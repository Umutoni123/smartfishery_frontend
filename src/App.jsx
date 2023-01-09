import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cooperatives from './views/Cooperative';
import Dashboard from './views/Dashboard';
import FishDiseases from './views/FishDiseases';
import FishPonds from './views/FishPonds';
import FishTypes from './views/FishTypes';

import Home from './views/Home'
import Locations from './views/Locations';
import Login from './views/Login';
import NotFound from './views/NotFound'
import RecommendedTreatments from './views/RecommendedTreatments';

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
        <Route exact path="/cooperatives">
          <Dashboard children={<Cooperatives />} />
        </Route>
        <Route exact path="/fishtypes">
          <Dashboard children={<FishTypes />} />
        </Route>
        <Route exact path="/fishdiseases">
          <Dashboard children={<FishDiseases />} />
        </Route>
        <Route exact path="/recommendedtreatments">
          <Dashboard children={<RecommendedTreatments />} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
