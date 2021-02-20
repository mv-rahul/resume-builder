import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { ResumeTable } from "./ResumeTable";
import { PersonalDetails } from "./PersonalDetails";
import { WorkExperience } from "./WorkExperience";
import { Project } from "./Project";
import { Education } from "./Education";
import { Summary } from "./Summary";
import { ResumePdf } from "./ResumePdf";

const ResumeManagementRoutes = ({ match: { url } }) => (
  <Switch>
    <Route exact path={`${url}/`} render={() => <ResumeTable />} />
    <Route
      path={`${url}/personaldetails/:id`}
      render={() => <PersonalDetails />}
    />
    <Route path={`${url}/exp/:id`} render={() => <WorkExperience />} />
    <Route path={`${url}/project/:id`} render={() => <Project />} />
    <Route path={`${url}/education/:id`} render={() => <Education />} />
    <Route path={`${url}/summary/:id`} render={() => <Summary />} />
  </Switch>
);
export const ResumeManagement = withRouter(ResumeManagementRoutes);
