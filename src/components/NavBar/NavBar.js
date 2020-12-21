import React, { Component } from 'react';
import styles from './navBar.module.css';

class NavBar extends Component{
    render() {
        return (
             <div className={styles.navBarContainer}>
                 <ul>
                     <li>Boilers</li>
                     <li>Technicians</li>
                     <li>Buildings</li>
                     <li>Maintenance services</li>
                     <li>Reports</li>
                     <li>Settings</li>
                 </ul>
             </div>
        );
    }
}

export default NavBar