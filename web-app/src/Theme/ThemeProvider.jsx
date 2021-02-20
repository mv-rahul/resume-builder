import React from "react";
import { customTheme } from "./index";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";

const ThemeProvider = ({ children }) => {
  return (
    <MaterialThemeProvider theme={customTheme}>
      {children}
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;
