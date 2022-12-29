import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  fishDiseases: [],
  fishDiseasesDictionary: {},
  isFishDiseasesLoaded: false,
};

export const FishDiseasesSlice = createSlice({
  name: "FishDiseases",
  initialState,
  reducers: {
    setFishDiseases: (state, action) => {
      state.fishDiseases = action.payload;
      state.fishDiseasesDictionary = action.payload.reduce((acc, fishType) => {
        acc[fishType.Type_Id] = fishType;
        return acc;
      }, {});
      state.isFishDiseasesLoaded = true;
    },
  },
});

export const {
  setFishDiseases,
} = FishDiseasesSlice.actions;

export const selectFishDiseases = (state) => state.fishDiseases.fishDiseases;
export const selectIsFishDiseasesLoaded = (state) => state.fishDiseases.isFishDiseasesLoaded;
export const selectFishDiseasesDictionary = (state) => state.fishDiseases.fishDiseasesDictionary;

export default FishDiseasesSlice.reducer;