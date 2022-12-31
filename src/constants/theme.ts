import AppTheme, { AppThemeConfig } from "../models/appTheme";

const lightTheme: AppThemeConfig = {
  colors: {
    prime: "#4E9436",
    lightGrey: "#AAAAAA",
    dark: "#010101",
    white: "#FFFFFF",
    red: "#C11E0F",
    grey: "#2A2B31",
    blue: "#000F60",
    transparent: "transparent",
  },
  backgroundColors: {
    darkGray: "#18191D"
  },
};
const themes: AppTheme = {
  light: lightTheme,
  dark: lightTheme,
};
export default themes;
export const variables = themes.light;
