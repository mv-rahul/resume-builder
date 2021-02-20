import React, { useState } from "react";
import { Paper, Grid, Typography, Fab, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Select } from "../Select";
import { Form, Formik, FieldArray } from "formik";
import { useStore } from "../../Store/index";
import { SnackBar } from "../SnackBar";

export const Summary = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [
    currentResume,
    { createResume, updateResume, updateCurrentResume },
  ] = useStore("currentResume");
  const [resumeStatus, setResumeStatus] = useState();
  const navigateBack = (values) => {
    updateCurrentResume(values);
    history.push(`/resume/education/${id}`);
  };

  const onClickNext = (values) => {
    if (id === "new") {
      createResume({ ...currentResume, ...values });
      setResumeStatus("Resume has been successfully created");
    } else {
      updateResume(id, { ...currentResume, ...values });
      setResumeStatus("Resume has been successfully updated");
    }
  };

  const onCloseSnackBar = () => {
    setResumeStatus(null);
    history.push("/resume");
  };

  return (
    <Grid container direction="column">
      <Grid item xs>
        <Typography styles={classes.title} variant="h4">
          Summary
        </Typography>
      </Grid>
      <Grid item className={classes.gridPadding} xs>
        <Paper className={classes.paper} elevation={2}>
          <Formik
            initialValues={currentResume}
            onSubmit={(values) => onClickNext(values)}
          >
            {({ values, handleChange, setFieldValue }) => (
              <Form>
                <Grid
                  container
                  direction="column"
                  className={classes.container}
                >
                  <Grid item className={classes.gridPadding} xs={6}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography>Skills</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Select
                          onChange={(value) => {
                            setFieldValue("skills", value);
                          }}
                          value={values.skills}
                        ></Select>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs className={classes.gridPadding}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography>Achievements</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          multiline
                          variant="outlined"
                          name="achievements"
                          value={values.achievements}
                          onChange={handleChange}
                          fullWidth={true}
                          rows={15}
                        />
                      </Grid>
                    </Grid>
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
                          Save
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
      <SnackBar
        status={resumeStatus}
        onCloseError={onCloseSnackBar}
        color="green"
      />
    </Grid>
  );
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
