export interface AppThemeConfig {
  colors: {
    prime: string;
    lightGrey: string;
    dark: string;
    white: string;
    red: string;
    grey: string;
    transparent: string;
    blue: string;
  };
  backgroundColors: {
    darkGray: string
  };
}

export default interface AppTheme {
  [key: string]: AppThemeConfig;
}

export type AppThemeColor = "primary" | "secondary" | "danger" | "neutral";