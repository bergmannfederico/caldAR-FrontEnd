import React from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';


function NavBar(){  
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    }
        return (
            <div className={styles.navBarContainer}>
                <ul>
                    <li>
                        <Link style={linkStyle} to='/boilers'>Boilers</Link>
                    </li>
                    <li>Technicians</li>
                    <li>Buildings</li>
                    <li>Maintenance services</li>
                    <li>Customers</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </div>
        );
    }


export default NavBar;

