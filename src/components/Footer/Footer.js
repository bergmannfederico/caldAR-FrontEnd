import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component{
    render() {
        return (
             <div className={styles.footerContainer}>
                 <p>
                     CaldAR
                 </p>
             </div>
        );
    }
}

export default Footer;