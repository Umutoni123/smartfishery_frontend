import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  fishPonds: [],
  fishPondsDictionary: {},
  selectedFishPond: null,
  isFishPondsLoaded: false,
};

export const FishPondsSlice = createSlice({
  name: "FishPonds",
  initialState,
  reducers: {
    setFishPonds: (state, action) => {
      state.fishPonds = action.payload;
      state.fishPondsDictionary = action.payload.reduce((acc, fishPond) => {
        acc[fishPond.id] = fishPond;
        return acc;
      }, {});
      state.isFishPondsLoaded = true;
    },
    setSelectedFishPond: (state, action) => {
      state.selectedFishPond = action.payload;
    }
  },
});

export const {
  setFishPonds,
  setSelectedFishPond,
} = FishPondsSlice.actions;

export const selectFishPonds = (state) => state.fishPonds.fishPonds;
export const selectIsFishPondsLoaded = (state) => state.fishPonds.isFishPondsLoaded;
export const selectFishPondsDictionary = (state) => state.fishPonds.fishPondsDictionary;
export const selectSelectedFishPond = (state) => state.fishPonds.selectedFishPond;

export default FishPondsSlice.reducer;