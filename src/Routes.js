import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Boilers from './components/Boilers/Boilers'


class Routes extends Component{
  render() {
      return(
        <Switch>
        {//<Redirect exact push from="/" to="/"></Redirect>
}
            <Route path="/boilers" >
                <MainLayout>
                    <Boilers />
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