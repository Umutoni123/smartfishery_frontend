import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import FishPonds from './FishPonds'
import AppServices from "../services";
import {
  loadUser,
  selectIsLoggedIn,
  selectUser
} from '../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, } from 'react'
import { useHistory } from "react-router-dom"
import { setFishPonds } from '../store/modules/fishPondsSlice';
import { setLocations } from '../store/modules/locationSlice';
import { setCooperatives } from '../store/modules/cooperativeSlice';

function Dashboard({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn && loaded) {
      console.log("not logged in")
      history.push("/login");
    }
  }, [isLoggedIn, loaded])

  useEffect(() => {
    if (!loaded) {
      dispatch(loadUser());
    } else {
      AppServices.getItems('Location').then((response) => {
        if (response.data) {
          dispatch(setLocations(response.data.data));
        }
      });
      AppServices.getItems('Fishponds').then((response) => {
        if (response.data) {
          dispatch(setFishPonds(response.data.data));
        }
      });
      AppServices.getItems('cooperatives').then((response) => {
        if (response.data) {
          dispatch(setCooperatives(response.data.data));
        }
      });
      // AppServices.getItems('samplinglocations').then((response) => {
      //   if (response.data) {
      //     dispatch(setSamplingLocations(Object.values(response.data)));
      //   }
      // });
    }
  }, [loaded]);

  useEffect(() => {
    if (user)
      setLoaded(true);
  }, [user]);

  return (
    <div className='relative w-screen'>
      <SideBar />
      <div className=' full-height w-full'>{children}</div>
    </div>
  )
}

export default Dashboard