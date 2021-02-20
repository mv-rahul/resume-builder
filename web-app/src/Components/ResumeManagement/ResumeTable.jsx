import React, { useState } from "react";
import { Paper, Grid, Typography, Fab, Icon, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { useStore } from "../../Store/index";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import { v4 as uuidv4 } from "uuid";

export const ResumeTable = () => {
  const classes = useStyles();
  const [resumeList, { updateCurrentResume, deleteResume }] = useStore(
    "resumeList"
  );
  const [resumeIdToDelete, setResumeIdToDelete] = useState();
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const history = useHistory();

  const onClickAddNew = () => {
    const newValue = {
      id: uuidv4(),
      fullName: "",
      region: "",
      city: "",
      pinCode: "",
      email: "",
      phone: "",
      work: [
        {
          jobTitle: "",
          employer: "",
          startDate: "",
          endDate: "",
        },
      ],
      project: "",
      education: [
        {
          qualification: "",
          institution: "",
          city: "",
          year: "",
        },
      ],
      skills: "",
      achievements: "",
    };
    updateCurrentResume(newValue);
    history.push(`/resume/personaldetails/${"new"}`);
  };

  const onClickEdit = (id) => {
    const resume = resumeList.find((item) => item.id === id);
    updateCurrentResume(resume);
    history.push(`/resume/personaldetails/${id}`);
  };
  const getResumeId = (resumeId) => {
    setResumeIdToDelete(resumeId);
    setOpenDeleteConfirmation(true);
  };
  const deleteResumeById = () => {
    deleteResume(resumeIdToDelete);
    setOpenDeleteConfirmation(false);
  };

  const onClickPreview = () => {
    console.log("onClickPreview");
  };

  return (
    <Grid container direction="column">
      <Grid item xs>
        <Grid container spacing={1} justify="flex-end">
          <Fab
            variant="extended"
            color="primary"
            size="large"
            onClick={onClickAddNew}
          >
            <AddIcon />
            Add New
          </Fab>
        </Grid>
      </Grid>

      {resumeList !== undefined ? (
        resumeList.map((resume, index) => (
          <Grid item xs className={classes.grid} key={index}>
            <Paper className={classes.paper}>
              <Grid
                container
                justify="space-between"
                className={classes.container}
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h5">{resume.fullName}</Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Fab
                        size="small"
                        className={classes.edit}
                        onClick={() => onClickEdit(resume.id)}
                      >
                        <EditIcon />
                      </Fab>
                    </Grid>
                    <Grid item>
                      <Fab
                        size="small"
                        className={classes.preview}
                        onClick={onClickPreview}
                      >
                        <GetAppRoundedIcon />
                      </Fab>
                    </Grid>
                    <Grid item>
                      <Fab
                        size="small"
                        className={classes.delete}
                        onClick={() => getResumeId(resume.id)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))
      ) : (
        <></>
      )}

      <Dialog
        open={openDeleteConfirmation}
        onClose={() => setOpenDeleteConfirmation(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permantly delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteResumeById}>yes</Button>
          <Button onClick={() => setOpenDeleteConfirmation(false)} autoFocus>
            no
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: theme.spacing(1),
  },
  grid: {
    paddingTop: theme.spacing(4),
  },
  paper: {
    borderRadius: "0.7em",
  },
  container: {
    padding: theme.spacing(3, 4),
  },
  edit: {
    backgroundColor: "#8bc34a",
    boxShadow: "none",
    borderRadius: "0.3em",
  },
  delete: {
    backgroundColor: "#b71c1c",
    boxShadow: "none",
    borderRadius: "0.3em",
  },
  preview: {
    backgroundColor: "black",
    boxShadow: "none",
    borderRadius: "0.3em",
  },
}));
