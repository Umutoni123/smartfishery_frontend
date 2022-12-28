import {
  configureStore
} from '@reduxjs/toolkit'
import authReducer from './modules/authSlice';
import fishPondsReducer from './modules/fishPondsSlice';
import locationsReducer from './modules/locationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fishPonds: fishPondsReducer,
    locations: locationsReducer,
  },
})