import { Grid } from "@material-ui/core";
import React from "react";

export const AppLayoutHeader = ({ children }) => (
  <Grid item xs={10}>
    {children}
  </Grid>
);
