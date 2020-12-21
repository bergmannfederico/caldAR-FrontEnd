import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Technician from './components/technician';



class Routes extends Component{
  render() {
      return(
        <Switch>
        {//<Redirect exact push from="/" to="/"></Redirect>
}
            <Route path="/technician" >
                <MainLayout>
                    <Technician />
                </MainLayout>
            </Route>
            <Route path="/" >
                <MainLayout/>
            </Route>
        </Switch>
      );
  }
}

export default Routes;