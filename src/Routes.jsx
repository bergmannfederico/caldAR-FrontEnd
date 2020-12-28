import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
//import Technician from "./components/technician";
import Buildings from "./components/Buildings";
import AddBuildingContainer from "./containers/AddBuildingContainer"
import EditBuildingContainer from "./containers/EditBuildingContainer"
import ViewBuildingContainer from "./containers/ViewBuildingContainer"

function Routes() {
  return (
    <Switch>
      {
        //<Redirect exact push from="/" to="/"></Redirect>
      }

      <Route path="/buildings">
        <MainLayout>
          <Buildings />
        </MainLayout>
      </Route>
      <Route path="/">
        <MainLayout />
      </Route>
      <BrowserRouter>
        <Route path="/add" exact>
        <MainLayout>
          <AddBuildingContainer />
        </MainLayout>
      </Route>
      <Route path="/edit/:id" exact>
        <MainLayout>
          <EditBuildingContainer />
        </MainLayout>
      </Route>
      <Route path="/view/:id" exact>
        <MainLayout>
          <ViewBuildingContainer />
        </MainLayout>
      </Route></BrowserRouter>
      
    </Switch>
  );
}

export default Routes;
