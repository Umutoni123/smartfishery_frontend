import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  pondDiseases: [],
  pondDiseasesDictionary: {},
  isPondDiseasesLoaded: false,
};

export const PondDiseasesSlice = createSlice({
  name: "PondDiseases",
  initialState,
  reducers: {
    setPondDiseases: (state, action) => {
      state.pondDiseases = action.payload;
      state.pondDiseasesDictionary = action.payload.reduce((acc, pondType) => {
        acc[pondType.id] = pondType;
        return acc;
      }, {});
      state.isPondDiseasesLoaded = true;
    },
  },
});

export const {
  setPondDiseases,
} = PondDiseasesSlice.actions;

export const selectPondDiseases = (state) => state.pondDiseases.pondDiseases;
export const selectIsPondDiseasesLoaded = (state) => state.pondDiseases.isPondDiseasesLoaded;
export const selectPondDiseasesDictionary = (state) => state.pondDiseases.pondDiseasesDictionary;

export default PondDiseasesSlice.reducer;