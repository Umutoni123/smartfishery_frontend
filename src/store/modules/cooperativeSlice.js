import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  cooperatives: [],
  cooperativesDictionary: {},
  isCooperativesLoaded: false,
};

export const CooperativesSlice = createSlice({
  name: "Cooperatives",
  initialState,
  reducers: {
    setCooperatives: (state, action) => {
      state.cooperatives = action.payload;
      state.cooperativesDictionary = action.payload.reduce((acc, cooperative) => {
        acc[cooperative.id] = cooperative;
        return acc;
      }, {});
      state.isCooperativesLoaded = true;
    },
  },
});

export const {
  setCooperatives,
} = CooperativesSlice.actions;

export const selectCooperatives = (state) => state.cooperatives.cooperatives;
export const selectIsCooperativesLoaded = (state) => state.cooperatives.isCooperativesLoaded;
export const selectCooperativesDictionary = (state) => state.cooperatives.cooperativesDictionary;

export default CooperativesSlice.reducer;