import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
import AppServices from "../../services";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      return AppServices.getCurrentUser().then(({
        data
      }) => {
        return data;
      }).catch((e) => {
        localStorage.removeItem('token');
      })

    } else {
      throw new Error("No token found");
    }
  }
);

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = {};
      state.isLoggedIn = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.user = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = {
          ...action.payload
        };
        if (action.payload) state.isLoggedIn = true;
      })
      .addCase(loadUser.rejected, (state) => {
        state.user = {};
        state.isLoggedIn = false;
      });
  },
});

export const {
  login,
  logout,
  setUser
} = AuthSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default AuthSlice.reducer;