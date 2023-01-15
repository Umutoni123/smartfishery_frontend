import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { selectUser } from "./store/modules/authSlice";
import Cooperatives from "./views/Cooperative";
import Dashboard from "./views/Dashboard";
import FishDiseases from "./views/FishDiseases";
import FishPonds from "./views/FishPonds";
import FishTypes from "./views/FishTypes";

import Home from "./views/Home";
import Locations from "./views/Locations";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import PondDiseases from "./views/PondDiseases";
import PondEnvironments from "./views/PondEnvironments";
import Production from "./views/Production";
import UserRoles from "./views/UserRoles";
import Users from "./views/Users";

const App = () => {
  const user = useSelector(selectUser);
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
        <Route exact path="/fishtypes">
          <Dashboard children={<FishTypes />} />
        </Route>
        <Route exact path="/fishdiseases">
          <Dashboard children={<FishDiseases />} />
        </Route>
        <Route exact path="/pondenvironments">
          <Dashboard children={<PondEnvironments />} />
        </Route>
        <Route exact path="/production">
          <Dashboard children={<Production />} />
        </Route>
        <Route exact path="/ponddiseases">
          <Dashboard children={<PondDiseases />} />
        </Route>
        <Route exact path="/userroles">
          <Dashboard
            children={user?.type === "admin" ? <UserRoles /> : <NotFound />}
          />
        </Route>
        <Route exact path="/users">
          <Dashboard
            children={user?.type === "admin" ? <Users /> : <NotFound />}
          />
        </Route>

        <Route exact path="/cooperatives">
          <Dashboard
            children={
              user?.type !== "cooperativemanager" ? (
                <Cooperatives />
              ) : (
                <NotFound />
              )
            }
          />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
