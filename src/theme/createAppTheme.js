import { createTheme } from "@mui/material/styles";
import tokens from "./tokens";

export function createAppTheme(mode) {
  const colors = tokens.palette[mode];

  return createTheme({
    palette: {
      mode,
      background: { default: colors.bg, paper: colors.surface },
      text: { primary: colors.textPrimary, secondary: colors.textSecondary },
      primary: { main: colors.brand, contrastText: colors.onBrand },
      secondary: { main: colors.accent },
      divider: colors.border,
    },
    typography: {
      fontFamily: tokens.type.body,
      h1: { fontFamily: tokens.type.display },
      h2: { fontFamily: tokens.type.display },
      h3: { fontFamily: tokens.type.display },
      h4: { fontFamily: tokens.type.display },
      h5: { fontFamily: tokens.type.display },
      h6: { fontFamily: tokens.type.display },
      button: { fontFamily: tokens.type.body, textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: tokens.radius.md },
    spacing: 4,
    breakpoints: { values: tokens.breakpoints },
    zIndex: { appBar: tokens.zIndex.nav, drawer: tokens.zIndex.drawer },
    components: {
      MuiButton: { defaultProps: { disableElevation: true } },
      MuiCard: { defaultProps: { elevation: 0 } },
    },
    tokens: { ...tokens, colors, mode },
  });
}

export default createAppTheme;
