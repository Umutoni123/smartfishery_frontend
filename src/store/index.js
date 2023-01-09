import {
  configureStore
} from '@reduxjs/toolkit'
import authReducer from './modules/authSlice';
import cooperativesReducer from './modules/cooperativeSlice';
import fishPondsReducer from './modules/fishPondsSlice';
import locationsReducer from './modules/locationSlice';
import fishTypesReducer from './modules/fishTypesSlice';
import fishDiseasesReducer from './modules/fishDiseasesSlice';
import recommendedTreatmentsReducer from './modules/recommendedTreatmentsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fishPonds: fishPondsReducer,
    locations: locationsReducer,
    cooperatives: cooperativesReducer,
    fishTypes: fishTypesReducer,
    fishDiseases: fishDiseasesReducer,
    recommendedTreatments: recommendedTreatmentsReducer,
  },
})