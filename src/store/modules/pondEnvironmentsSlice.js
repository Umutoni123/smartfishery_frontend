import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  pondEnvironments: [],
  pondEnvironmentsDictionary: {},
  isPondEnvironmentsLoaded: false,
};

export const PondEnvironmentsSlice = createSlice({
  name: "PondEnvironments",
  initialState,
  reducers: {
    setPondEnvironments: (state, action) => {
      state.pondEnvironments = action.payload;
      state.pondEnvironmentsDictionary = action.payload.reduce((acc, fishType) => {
        acc[fishType.id] = fishType;
        return acc;
      }, {});
      state.isPondEnvironmentsLoaded = true;
    },
  },
});

export const {
  setPondEnvironments,
} = PondEnvironmentsSlice.actions;

export const selectPondEnvironments = (state) => state.pondEnvironments.pondEnvironments;
export const selectIsPondEnvironmentsLoaded = (state) => state.pondEnvironments.isPondEnvironmentsLoaded;
export const selectPondEnvironmentsDictionary = (state) => state.pondEnvironments.pondEnvironmentsDictionary;

export default PondEnvironmentsSlice.reducer;