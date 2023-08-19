import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAdmin: false,
  id: "", // user id
  userData: {}, // user data
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    auth: (state, action) => {
      state = action.payload;
      return state;
    },
    logout: () => {
      return initialState;
    },
    setId: (state, action) => {
      state.id = action.payload;
      return state;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
      return state;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      return state;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      return state;
    },
  },
});
