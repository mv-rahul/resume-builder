import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export const AppHeader = () => {
  const NavLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item component={NavLink} to={`/`}>
            <HomeRoundedIcon fontSize="large" style={{ color: "black" }} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
