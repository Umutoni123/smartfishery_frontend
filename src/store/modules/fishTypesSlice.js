import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  fishTypes: [],
  fishTypesDictionary: {},
  isFishTypesLoaded: false,
};

export const FishTypesSlice = createSlice({
  name: "FishTypes",
  initialState,
  reducers: {
    setFishTypes: (state, action) => {
      state.fishTypes = action.payload;
      state.fishTypesDictionary = action.payload.reduce((acc, fishType) => {
        acc[fishType.Type_Id] = fishType;
        return acc;
      }, {});
      state.isFishTypesLoaded = true;
    },
  },
});

export const {
  setFishTypes,
} = FishTypesSlice.actions;

export const selectFishTypes = (state) => state.fishTypes.fishTypes;
export const selectIsFishTypesLoaded = (state) => state.fishTypes.isFishTypesLoaded;
export const selectFishTypesDictionary = (state) => state.fishTypes.fishTypesDictionary;

export default FishTypesSlice.reducer;