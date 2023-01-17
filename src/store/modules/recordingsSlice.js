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
      state.recordingsDictionary = action.payload.reduce((acc, el) => {
        acc[el.entry_id] = el;
        return acc;
      }, {});
      state.isRecordingsLoaded = true;
    },
    addRecording: (state, action) => {
      if (!state.recordingsDictionary[action.payload.entry_id]) {
        state.recordings.unshift(action.payload);
        state.recordingsDictionary[action.payload.entry_id] = action.payload;
      }
    }
  },
});

export const {
  setRecordings,
  addRecording
} = RecordingsSlice.actions;

export const selectRecordings = (state) => {
  return state.recordings.recordings;
  // return state.recordings.recordings.filter(recording => recording.fishPondId === state.fishPonds.selectedFishPond.id);
};
export const selectIsRecordingsLoaded = (state) => state.recordings.isRecordingsLoaded;
export const selectRecordingsDictionary = (state) => state.recordings.recordingsDictionary;

export default RecordingsSlice.reducer;