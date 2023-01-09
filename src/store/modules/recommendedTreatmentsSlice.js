import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  recommendedTreatments: [],
  recommendedTreatmentsDictionary: {},
  isRecommendedTreatmentsLoaded: false,
};

export const RecommendedTreatmentsSlice = createSlice({
  name: "RecommendedTreatments",
  initialState,
  reducers: {
    setRecommendedTreatments: (state, action) => {
      state.recommendedTreatments = action.payload;
      state.recommendedTreatmentsDictionary = action.payload.reduce((acc, fishType) => {
        acc[fishType.Type_Id] = fishType;
        return acc;
      }, {});
      state.isRecommendedTreatmentsLoaded = true;
    },
  },
});

export const {
  setRecommendedTreatments,
} = RecommendedTreatmentsSlice.actions;

export const selectRecommendedTreatments = (state) => state.recommendedTreatments.recommendedTreatments;
export const selectIsRecommendedTreatmentsLoaded = (state) => state.recommendedTreatments.isRecommendedTreatmentsLoaded;
export const selectRecommendedTreatmentsDictionary = (state) => state.recommendedTreatments.recommendedTreatmentsDictionary;

export default RecommendedTreatmentsSlice.reducer;