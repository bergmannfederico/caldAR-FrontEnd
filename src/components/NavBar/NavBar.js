import React, { Component } from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';


class NavBar extends Component{
    
    render() {
        const linkStyle = {
            color: 'white',
            textDecoration: 'none',
        }
            return (
                <div className={styles.navBarContainer}>
                    <ul>
                        <li>Boilers</li>
                        <li>
                            <Link style={linkStyle} to='/technician'>
                            Technicians
                            </Link>
                        </li>
                        <li>Buildings</li>
                        <li>Maintenance services</li>
                        <li>Customers</li>
                        <li>Reports</li>
                        <li>Settings</li>
                    </ul>
                </div>
        );
    }
}

export default NavBar;