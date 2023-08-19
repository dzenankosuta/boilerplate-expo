import { createSlice } from "@reduxjs/toolkit";

const themes = {
  theme1: {
    dark: false,
    colors: {
      primary: "#454545",
      background: "#ffffff",
      background2: "#FAF9F6",
      background3: "#b0b1ab",
      infoBackground: "#eaeaf5",
      card: "#a8a7a7",
      text: "#3e3e3e",
      border: "#a0a0a0",
      darkBorder: "#808080",
      notification: "rgb(255, 69, 58)",
      placeholder: "#a8a7a7",
    },
  },
  theme2: {
    dark: true,
    colors: {
      primary: "#454545",
      background: "#ffffff",
      background2: "#FAF9F6",
      background3: "#b0b1ab",
      infoBackground: "#eaeaf5",
      card: "#a8a7a7",
      text: "#3e3e3e",
      border: "#a0a0a0",
      darkBorder: "#808080",
      notification: "rgb(255, 69, 58)",
      placeholder: "#a8a7a7",
    },
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    selectedTheme: themes.theme1,
  },
  reducers: {
    setTheme: (state, action) => {
      const { theme } = action.payload; // theme = 'light' or 'dark'
      state.selectedTheme = themes[theme];
      return state;
    },
  },
});
