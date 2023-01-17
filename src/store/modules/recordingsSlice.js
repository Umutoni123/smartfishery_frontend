import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  recordings: [],
  recordingsDictionary: {},
  selectedRecording: null,
};

export const RecordingsSlice = createSlice({
  name: "Recordings",
  initialState,
  reducers: {
    setRecordings: (state, action) => {
      state.recordings = action.payload;
      state.recordingsDictionary = action.payload.reduce((acc, fishPond) => {
        acc[fishPond.id] = fishPond;
        return acc;
      }, {});
      state.isRecordingsLoaded = true;
    },
  },
});

export const {
  setRecordings,
} = RecordingsSlice.actions;

export const selectRecordings = (state) => {
  return state.recordings.recordings;
  // return state.recordings.recordings.filter(recording => recording.fishPondId === state.fishPonds.selectedFishPond.id);
};
export const selectIsRecordingsLoaded = (state) => state.recordings.isRecordingsLoaded;
export const selectRecordingsDictionary = (state) => state.recordings.recordingsDictionary;

export default RecordingsSlice.reducer;