import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  production: [],
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
  },
});

export const {
  setProduction,
} = ProductionSlice.actions;

export const selectProduction = (state) => state.production.production;
export const selectIsProductionLoaded = (state) => state.production.isProductionLoaded;
export const selectProductionDictionary = (state) => state.production.productionDictionary;

export default ProductionSlice.reducer;