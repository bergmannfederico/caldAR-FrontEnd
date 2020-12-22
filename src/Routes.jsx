import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
//import Technician from "./components/technician";
import Buildings from "./Buildings";

function Routes() {
  return (
    <Switch>
      {
        //<Redirect exact push from="/" to="/"></Redirect>
      }

      <Route path="/buildings">
        <MainLayout>
          <Buildings/>
        </MainLayout>
      </Route>
      <Route path="/">
        <MainLayout />
      </Route>
    </Switch>
  );
}

export default Routes;
