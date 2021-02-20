import { Grid } from "@material-ui/core";
import React from "react";

export const AppLayoutBody = ({ children }) => (
  <Grid item xs={10} style={{ minHeight: "85vh", paddingTop: "3em" }}>
    {children}
  </Grid>
);
