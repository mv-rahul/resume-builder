import React from "react";
import { AppLayout } from "./AppLayout";
import { AppHeader } from "./AppHeader";
import { Switch, Route } from "react-router-dom";
import { ResumeManagement } from "./ResumeManagement/ResumeManagement";
import { Home } from "./Home";

export const AppViews = () => (
  <AppLayout>
    <AppLayout.Header>
      <AppHeader />
    </AppLayout.Header>
    <AppLayout.Body>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/resume" render={() => <ResumeManagement />} />
      </Switch>
    </AppLayout.Body>
    <AppLayout.Footer>
      <div></div>
    </AppLayout.Footer>
  </AppLayout>
);
