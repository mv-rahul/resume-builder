import React, { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Fab,
  ButtonBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Form, Formik, FieldArray } from "formik";
import { useStore } from "../../Store/index";

export const WorkExperience = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [navigateToProject, setNavigateToProject] = useState(false);
  const [currentResume, { updateCurrentResume }] = useStore("currentResume");
  const initialValues = { work: currentResume.work };

  const navigateBack = (values) => {
    updateCurrentResume({ ...currentResume, ...values });
    history.push(`/resume/personaldetails/${id}`);
  };

  const onClickNext = (values) => {
    updateCurrentResume({ ...currentResume, ...values });
    setNavigateToProject(true);
  };

  const newValue = {
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
  };
  if (navigateToProject) {
    return <Redirect to={`/resume/project/${id}`}></Redirect>;
  } else {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onClickNext(values)}
      >
        {({ values, handleChange }) => (
          <Form>
            <FieldArray
              name="work"
              render={(arrayHelpers) => (
                <Grid container direction="column">
                  <Grid item xs>
                    <Grid container justify="space-between">
                      <Grid item>
                        <Typography styles={classes.title} variant="h4">
                          Work Experience
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Fab
                          variant="extended"
                          color="primary"
                          onClick={() => {
                            arrayHelpers.insert(values.work.length, newValue);
                          }}
                        >
                          <AddIcon />
                          Add Work
                        </Fab>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.gridPadding} xs>
                    <Paper className={classes.paper} elevation={2}>
                      <Grid
                        container
                        direction="column"
                        className={classes.container}
                      >
                        {values.work.length > 0 &&
                          values.work.map((item, index) => (
                            <React.Fragment key={index}>
                              {values.work.length > 1 ? (
                                <Grid
                                  item
                                  xs
                                  className={
                                    index === 0
                                      ? classes.gridPadding
                                      : classes.grid
                                  }
                                >
                                  <Grid container justify="flex-end">
                                    <ButtonBase
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      <Typography color="error">
                                        Delete
                                      </Typography>
                                    </ButtonBase>
                                  </Grid>
                                </Grid>
                              ) : (
                                <></>
                              )}
                              <Grid item xs>
                                <Grid container spacing={3}>
                                  <Grid item xs={6}>
                                    <Grid container direction="column">
                                      <Typography>Job Title</Typography>
                                      <TextField
                                        variant="outlined"
                                        name={`work.${index}.jobTitle`}
                                        onChange={handleChange}
                                        value={item.jobTitle}
                                      ></TextField>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Grid container direction="column">
                                      <Typography>Employer</Typography>
                                      <TextField
                                        variant="outlined"
                                        name={`work.${index}.employer`}
                                        onChange={handleChange}
                                        value={item.employer}
                                      ></TextField>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs className={classes.gridPadding}>
                                <Grid container spacing={3}>
                                  <Grid item xs={6}>
                                    <Grid container direction="column">
                                      <Typography>Start Date</Typography>
                                      <TextField
                                        variant="outlined"
                                        type="date"
                                        name={`work.${index}.startDate`}
                                        onChange={handleChange}
                                        value={item.startDate}
                                      ></TextField>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Grid container direction="column">
                                      <Typography>End Date</Typography>
                                      <TextField
                                        variant="outlined"
                                        type="date"
                                        name={`work.${index}.endDate`}
                                        onChange={handleChange}
                                        value={item.endDate}
                                      ></TextField>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          ))}

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
                              <Fab
                                variant="extended"
                                color="primary"
                                type="submit"
                              >
                                Next
                              </Fab>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              )}
            />
          </Form>
        )}
      </Formik>
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
  grid: {
    paddingTop: theme.spacing(4),
  },
}));
