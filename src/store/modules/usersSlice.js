import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersDictionary: {},
  isUsersLoaded: false,
};

export const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.usersDictionary = action.payload.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      state.isUsersLoaded = true;
    },
  },
});

export const {
  setUsers,
} = UsersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectIsUsersLoaded = (state) => state.users.isUsersLoaded;
export const selectUsersDictionary = (state) => state.users.usersDictionary;

export default UsersSlice.reducer;