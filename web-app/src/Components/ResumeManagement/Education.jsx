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

export const Education = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [navigateToSummary, setNavigateToSummary] = useState(false);
  const [currentResume, { updateCurrentResume }] = useStore("currentResume");
  const initialValues = { education: currentResume.education };
  const newValue = { qualification: "", institution: "", city: "", year: "" };

  const navigateBack = (values) => {
    updateCurrentResume({ ...currentResume, ...values });
    history.push(`/resume/project/${id}`);
  };

  const onClickNext = (values) => {
    updateCurrentResume({ ...currentResume, ...values });
    setNavigateToSummary(true);
  };
  if (navigateToSummary) {
    return <Redirect to={`/resume/summary/${id}`}></Redirect>;
  } else {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onClickNext(values)}
      >
        {({ values, handleChange }) => (
          <Form>
            <FieldArray
              name="education"
              render={(arrayHelpers) => (
                <Grid container direction="column">
                  <Grid item xs>
                    <Grid container justify="space-between">
                      <Grid item>
                        <Typography styles={classes.title} variant="h4">
                          Education
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Fab
                          variant="extended"
                          color="primary"
                          onClick={() => {
                            arrayHelpers.insert(
                              values.education.length,
                              newValue
                            );
                          }}
                        >
                          <AddIcon />
                          Add Education
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
                        {values.education.length > 0 &&
                          values.education.map((item, index) => (
                            <React.Fragment key={index}>
                              {values.education.length > 1 ? (
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
                                      <Typography>Qualification</Typography>
                                      <TextField
                                        variant="outlined"
                                        name={`education.${index}.qualification`}
                                        onChange={handleChange}
                                        value={item.qualification}
                                      ></TextField>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Grid container direction="column">
                                      <Typography>Institution</Typography>
                                      <TextField
                                        variant="outlined"
                                        name={`education.${index}.institution`}
                                        onChange={handleChange}
                                        value={item.institution}
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
                                        name={`education.${index}.city`}
                                        onChange={handleChange}
                                        value={item.city}
                                      ></TextField>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Grid container direction="column">
                                      <Typography>
                                        Year of completion
                                      </Typography>
                                      <TextField
                                        variant="outlined"
                                        type="date"
                                        name={`education.${index}.year`}
                                        onChange={handleChange}
                                        value={item.year}
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
