import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshingCurrentUser: false,
    error: null,
  },
  // reducers: {
  //   changeTheme(state, { payload }) {
  //     return { ...state, theme: payload };
  //   },
  // },
  // extraReducers: {
  //   [register.fulfilled](state, { payload }) {
  //     state.user = payload.user;
  //     state.token = payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.fulfilled](state, { payload }) {
  //     state.user = payload.user;
  //     state.token = payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logOut.fulfilled](state, { payload }) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  //   [getCurrentUser.pending](state) {
  //     state.isRefreshingCurrentUser = true;
  //   },
  //   [getCurrentUser.fulfilled](state, { payload }) {
  //     state.user = { payload };
  //     // state.token = null;
  //     state.isLoggedIn = true;
  //     state.isRefreshingCurrentUser = false;
  //   },
  //   [getCurrentUser.rejected](state) {
  //     state.isRefreshingCurrentUser = false;
  //   },
  // },
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [login.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
      state.isLoading = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = { payload };
      // state.token = null;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshingCurrentUser = false;
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.isRefreshingCurrentUser = false;
      // state.isLoggedIn = false;
      // state.error = payload;
    },
  },
});
export default authSlice.reducer;
// export const { changeTheme } = authSlice.actions;
