import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshingCurrentUser: false,
    theme: "light",
  },
  reducers: {
    changeTheme(state, { payload }) {
      return { ...state, theme: payload };
    },
  },
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, { payload }) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = { payload };
      // state.token = null;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [getCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
  },
});
export default authSlice.reducer;
export const { changeTheme } = authSlice.actions;
