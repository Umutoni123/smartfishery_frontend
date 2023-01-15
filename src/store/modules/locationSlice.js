import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  locationsDictionary: {},
  isLocationsLoaded: false,
};

export const LocationsSlice = createSlice({
  name: "Locations",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
      state.locationsDictionary = action.payload.reduce((acc, location) => {
        acc[location.id] = location;
        return acc;
      }, {});
      state.isLocationsLoaded = true;
    },
  },
});

export const {
  setLocations,
} = LocationsSlice.actions;

export const selectLocations = (state) => state.locations.locations;
export const selectIsLocationsLoaded = (state) => state.locations.isLocationsLoaded;
export const selectLocationsDictionary = (state) => state.locations.locationsDictionary;

export default LocationsSlice.reducer;