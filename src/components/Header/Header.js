import React, { Component } from 'react';
import styles from './header.module.css'

class Header extends Component{
    render() {
        return (
             <div className={styles.headerContainer}>
                 <p>
                     {this.props.title}
                 </p>
             </div>
        );
    }
}

export default Header;