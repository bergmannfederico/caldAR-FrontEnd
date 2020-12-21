import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import "./App.css";
import buildingList from "./mocks/buildings"
import BuildingTable from "./components/BuildingList"

function App() {
  const [buildings, setBuildings] = useState(buildingList);

  return (
    <MainLayout>
      return (
      <Router>
         <div className="App">
          <div className="container">
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <h2>View buildings</h2>
                  <BuildingTable buildings={buildings} />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    </MainLayout>
  );
}

export default App;
