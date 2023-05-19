import { ThemeOptions } from "@mui/material";

export const manageHotelThemeLight: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#00A19C",
      light: "#4DBDBA",
      dark: "#00746E",
    },
    error: {
      main: "#E02020",
      light: "#E96363",
      dark: "#A21414",
    },
    warning: {
      main: "#F7B500",
      light: "#FBDA80",
      dark: "#F18D00",
    },
    secondary: {
      main: "#763F98",
      light: "#763F98",
      dark: "#461B6A",
    },
    success: {
      main: "#76DD9F",
      light: "#EDF7ED",
    },
    text: {
      primary: "#333333",
      secondary: "#8D8D8D",
    },
    info: {
      main: "#ECECEC",
      light: "#CCCCCC",
      dark: "#F8F8F8",
      contrastText: "#191B1F",
    },
  },
  typography: {
    fontSize: 16,
    h2: {
      fontSize: "26px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "12px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
    },
    button: {
      fontSize: "12px",
      fontWeight: 400,
    },
  }
}