import React from "react";
import SideBar from "../components/SideBar/SideBar";
import FishPonds from "./FishPonds";
import AppServices from "../services";
import {
  loadUser,
  selectIsLoggedIn,
  selectUser,
} from "../store/modules/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { setFishPonds } from "../store/modules/fishPondsSlice";
import { setLocations } from "../store/modules/locationSlice";
import { setCooperatives } from "../store/modules/cooperativeSlice";
import { setFishTypes } from "../store/modules/fishTypesSlice";
import { setFishDiseases } from "../store/modules/fishDiseasesSlice";
import { setPondEnvironments } from "../store/modules/pondEnvironmentsSlice";
import { setProduction, setProductionStats } from "../store/modules/productionSlice";
import { setUsers } from "../store/modules/usersSlice";
import { setUserRoles } from "../store/modules/userRolesSlice";
import { setPondDiseases } from "../store/modules/pondDiseasesSlice";

function Dashboard({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn && loaded) {
      console.log("not logged in");
      history.push("/login");
    }
  }, [isLoggedIn, loaded]);

  useEffect(() => {
    if (!loaded) {
      dispatch(loadUser());
    } else {
      AppServices.getItems("production/1").then((response) => {
        if (response.data) {
          dispatch(setProductionStats(response.data.data));
        }
      });
      AppServices.getItems("locations").then((response) => {
        if (response.data) {
          dispatch(setLocations(response.data.data));
        }
      });
      AppServices.getItems("fishponds").then((response) => {
        if (response.data) {
          dispatch(setFishPonds(response.data.data));
        }
      });
      AppServices.getItems("cooperatives").then((response) => {
        if (response.data) {
          dispatch(setCooperatives(response.data.data));
        }
      });
      AppServices.getItems("fishtypes").then((response) => {
        if (response.data) {
          dispatch(setFishTypes(response.data.data));
        }
      });
      AppServices.getItems("fishdiseases").then((response) => {
        if (response.data) {
          dispatch(setFishDiseases(response.data.data));
        }
      });
      AppServices.getItems("pond_environments").then((response) => {
        if (response.data) {
          dispatch(setPondEnvironments(response.data.data));
        }
      });
      AppServices.getItems("pond_diseases").then((response) => {
        if (response.data) {
                    console.log(response.data);
          dispatch(setPondDiseases(response.data.data));
        }
      });
      AppServices.getItems("production").then((response) => {
        if (response.data) {
          dispatch(setProduction(response.data.data));
        }
      });
      AppServices.getItems("users").then((response) => {
        if (response.data) {
          dispatch(setUsers(response.data.data));
        }
      });
      AppServices.getItems("user_roles").then((response) => {
        if (response.data) {
          dispatch(setUserRoles(response.data.data));
        }
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (user) setLoaded(true);
  }, [user]);

  return (
    <div className="relative w-screen">
      <SideBar />
      <div className=" full-height w-full">{children}</div>
    </div>
  );
}

export default Dashboard;
