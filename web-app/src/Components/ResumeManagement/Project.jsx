import React, { useState } from "react";
import { Paper, Grid, Typography, Fab, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useStore } from "../../Store/index";
import { Form, Formik } from "formik";

export const Project = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [navigateToEdu, setNavigateToEdu] = useState(false);
  const [currentResume, { updateCurrentResume }] = useStore("currentResume");

  const navigateBack = (values) => {
    updateCurrentResume(values);
    history.push(`/resume/exp/${id}`);
  };

  const onClickNext = (values) => {
    updateCurrentResume(values);
    setNavigateToEdu(true);
  };

  if (navigateToEdu) {
    return <Redirect to={`/resume/education/${id}`}></Redirect>;
  } else {
    return (
      <Grid container direction="column">
        <Grid item xs>
          <Typography styles={classes.title} variant="h4">
            Project Summary
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
                    <Grid item className={classes.gridPadding}>
                      <TextField
                        multiline
                        variant="outlined"
                        name="project"
                        onChange={handleChange}
                        value={values.project}
                        fullWidth={true}
                        rows={22}
                      />
                    </Grid>
                    <Grid item xs className={classes.fab}>
                      <Grid container justify="center" spacing={3}>
                        <Grid item>
                          <Fab
                            variant="extended"
                            color="primary"
                            onClick={() => navigateBack(values)}
                          >
                            Back
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
}));
