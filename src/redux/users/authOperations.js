import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchLogin,
  fetchRegister,
  fetchLogout,
  fetchCurrentUser,
} from "../../utils/fetchApi";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    const { confirmPassword, ...rest } = userData;
    try {
      const data = await fetchRegister(rest);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const data = await fetchLogin(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await fetchLogout();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const getCurrentUser = createAsyncThunk(
//   "auth/current",
//   async (_, thunkApi) => {
//     // const state = thunkApi.getState();
//     // const persistedToken = state.auth.token;
//     // if (!persistedToken) {
//     //   return thunkApi.rejectWithValue();
//     // }
//     try {
//       // token.set(token);
//       const data = await fetchCurrentUser();
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};
export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkApi.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

// //AsyncThunk
// export const register = createAsyncThunk(
//   "auth/register",
//   async (newUser, thunkApi) => {
//     try {
//       const { data } = await axios.post("/users/signup", newUser);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
//   try {
//     const { data } = await axios.post("/users/login", user);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
//   try {
//     await axios.post("/users/logout");
//     token.unset();
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const getCurrentUser = createAsyncThunk(
//   "auth/current",
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const persistedToken = state.auth.token;
//     if (!persistedToken) {
//       return thunkApi.rejectWithValue();
//     }
//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get("/users/current");
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
