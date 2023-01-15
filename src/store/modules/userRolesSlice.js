import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  userRoles: [],
  userRolesDictionary: {},
  isUserRolesLoaded: false,
};

export const UserRolesSlice = createSlice({
  name: "UserRoles",
  initialState,
  reducers: {
    setUserRoles: (state, action) => {
      state.userRoles = action.payload;
      state.userRolesDictionary = action.payload.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      state.isUserRolesLoaded = true;
    },
  },
});

export const {
  setUserRoles,
} = UserRolesSlice.actions;

export const selectUserRoles = (state) => state.userRoles.userRoles;
export const selectIsUserRolesLoaded = (state) => state.userRoles.isUserRolesLoaded;
export const selectUserRolesDictionary = (state) => state.userRoles.userRolesDictionary;

export default UserRolesSlice.reducer;