import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  fishPonds: [],
  fishPondsDictionary: {},
  isFishPondsLoaded: false,
};

export const FishPondsSlice = createSlice({
  name: "FishPonds",
  initialState,
  reducers: {
    setFishPonds: (state, action) => {
      state.fishPonds = action.payload;
      state.fishPondsDictionary = action.payload.reduce((acc, fishPond) => {
        acc[fishPond.Pond_Id] = fishPond;
        return acc;
      }, {});
      state.isFishPondsLoaded = true;
    },
  },
});

export const {
  setFishPonds,
} = FishPondsSlice.actions;

export const selectFishPonds = (state) => state.fishPonds.fishPonds;
export const selectIsFishPondsLoaded = (state) => state.fishPonds.isFishPondsLoaded;
export const selectFishPondsDictionary = (state) => state.fishPonds.fishPondsDictionary;

export default FishPondsSlice.reducer;