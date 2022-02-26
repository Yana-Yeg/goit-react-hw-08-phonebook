import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
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
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = { payload };
      // state.token = null;
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
