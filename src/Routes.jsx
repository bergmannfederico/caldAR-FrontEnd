import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Boilers from "./components/Boilers/Boilers";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/boilers">
          <MainLayout title="Boilers">
            <Boilers />
          </MainLayout>
        </Route>
        <Route exact path="/">
          <MainLayout />
        </Route>
      </Switch>
    );
  }
}

export default Routes;