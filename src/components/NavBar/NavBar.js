import React, { Component } from 'react';
import styles from './navBar.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Technician from '../technician';

class NavBar extends Component{
    
    render() {
        const linkStyle = {
            color: 'white',
            textDecoration: 'none',
        }
            return (
            <Router>
                <div className={styles.navBarContainer}>
                    <ul>
                        <li>Boilers</li>
                        <Link style={linkStyle} to='/technician'>
                            <Route path="/technician" exact component={Technician}/>
                            <li>Technicians</li>
                        </Link>
                        <li>Buildings</li>
                        <li>Maintenance services</li>
                        <li>Customers</li>
                        <li>Reports</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </Router>
        );
    }
}

export default NavBar;