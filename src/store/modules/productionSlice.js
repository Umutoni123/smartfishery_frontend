import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  production: [],
  productionStats: [],
  productionDictionary: {},
  isProductionLoaded: false,
};

export const ProductionSlice = createSlice({
  name: "Production",
  initialState,
  reducers: {
    setProduction: (state, action) => {
      state.production = action.payload;
      state.productionDictionary = action.payload.reduce((acc, location) => {
        acc[location.id] = location;
        return acc;
      }, {});
      state.isProductionLoaded = true;
    },
    setProductionStats: (state, action) => {
      state.productionStats = action.payload;
    }
  },
});

export const {
  setProduction,
  setProductionStats
} = ProductionSlice.actions;

export const selectProduction = (state) => state.production.production;
export const selectProductionStats = (state) => state.production.productionStats;
export const selectIsProductionLoaded = (state) => state.production.isProductionLoaded;
export const selectProductionDictionary = (state) => state.production.productionDictionary;

export default ProductionSlice.reducer;