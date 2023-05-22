import { ThemeProvider } from "@emotion/react";
import { PaletteMode } from "@mui/material";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";
import { getThemeColor } from "../theme/color-theme-light";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createMuiTheme(getThemeColor(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
