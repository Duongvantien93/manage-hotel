import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@mui/material/styles";
import { getThemeColor } from "./color-theme-light";
export const theme = createMuiTheme(getThemeColor());