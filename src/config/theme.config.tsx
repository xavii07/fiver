import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

type ThemeProps = {
  children: JSX.Element;
};

enum themePallete {
  primary = "#01cd74",
  secondary = "#FFC107",
  error = "#f80000",
  warning = "#FFA000",
  background = "#fff",
  fontFamily = "'JetBrains Mono', monospace",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePallete.background,
    },
    primary: {
      main: themePallete.primary,
    },
  },
  typography: {
    fontFamily: themePallete.fontFamily,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            textTransform: "none",
            color: themePallete.background,
            fontSize: "0.8rem",
            borderRadius: "0",
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            textTransform: "none",
            color: themePallete.primary,
            fontSize: "0.8rem",
            borderRadius: "0",
            fontWeight: "bold",
            padding: "0.3 rem 1rem",
          },
        },
      ],
    },
  },
});

export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
