import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Appointments from "./components/Appointments/Appointments";



class Routes extends Component{
    render() {
        return(
            <Switch>
                <Route path="/appointments" >
                    {console.log('asd')}
                    <MainLayout title='Appointments'>
                        <Appointments />
                    </MainLayout>
                </Route>
                <Route exact path="/" >
                    <MainLayout/>
                </Route>
            </Switch>
        );
    }
}

export default Routes;