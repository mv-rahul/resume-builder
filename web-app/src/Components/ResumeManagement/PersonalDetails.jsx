import React, { useState } from "react";
import { Paper, Grid, Typography, TextField, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { useStore } from "../../Store/index";

export const PersonalDetails = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [navigateToWorkExp, setNavigateToWorkExp] = useState(false);
  const [currentResume, { updateCurrentResume }] = useStore("currentResume");

  const navigateBack = () => {
    history.push("/resume");
  };

  const onClickNext = (values) => {
    updateCurrentResume(values);
    setNavigateToWorkExp(true);
  };

  if (navigateToWorkExp) {
    return <Redirect to={`/resume/exp/${id}`}></Redirect>;
  } else {
    return (
      <Grid container direction="column">
        <Grid item xs>
          <Typography styles={classes.title} variant="h4">
            Personal Details
          </Typography>
        </Grid>

        <Grid item className={classes.gridPadding} xs>
          <Paper className={classes.paper} elevation={2}>
            <Formik
              initialValues={currentResume}
              onSubmit={(values) => onClickNext(values)}
            >
              {({ values, handleChange }) => (
                <Form>
                  <Grid
                    container
                    direction="column"
                    className={classes.container}
                  >
                    <Grid item xs className={classes.gridPadding}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Typography>Full Name</Typography>
                            <TextField
                              variant="outlined"
                              name="fullName"
                              onChange={handleChange}
                              value={values.fullName}
                              required
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Typography>Region</Typography>
                            <TextField
                              variant="outlined"
                              name="region"
                              onChange={handleChange}
                              value={values.region}
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs className={classes.gridPadding}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Typography>City</Typography>
                            <TextField
                              variant="outlined"
                              name="city"
                              onChange={handleChange}
                              value={values.city}
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Typography>Pincode</Typography>
                            <TextField
                              variant="outlined"
                              name="pinCode"
                              onChange={handleChange}
                              value={values.pinCode}
                              type="number"
                              className={classes.field}
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs className={classes.gridPadding}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Typography>Email Id</Typography>
                            <TextField
                              variant="outlined"
                              name="email"
                              onChange={handleChange}
                              required
                              type="email"
                              value={values.email}
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Typography>Phone</Typography>
                            <TextField
                              variant="outlined"
                              name="phone"
                              onChange={handleChange}
                              value={values.phone}
                              type="number"
                              className={classes.field}
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs className={classes.fab}>
                      <Grid container justify="center" spacing={3}>
                        <Grid item>
                          <Fab
                            variant="extended"
                            color="primary"
                            onClick={navigateBack}
                          >
                            Cancel
                          </Fab>
                        </Grid>
                        <Grid item>
                          <Fab variant="extended" color="primary" type="submit">
                            Next
                          </Fab>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 800,
  },
  paper: {
    borderRadius: "0.7em",
  },
  gridPadding: {
    paddingTop: theme.spacing(2),
  },
  fab: {
    paddingTop: theme.spacing(5),
  },
  field: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
  },
}));
