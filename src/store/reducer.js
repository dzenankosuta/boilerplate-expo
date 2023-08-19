import { combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import { authSlice } from "./authSlice";

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  auth: authSlice.reducer,
});
