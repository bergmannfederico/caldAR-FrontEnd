import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component{
    render() {
        return (
             <div className={styles.footerContainer}>
                 <p>
                     This is a Footer component
                 </p>
             </div>
        );
    }
}

export default Footer;