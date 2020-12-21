import React, { Component } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import styles from './mainLayaout.module.css';

class MainLayout extends Component {
    render() {
        return (
             <div className={styles.appContainer}>
                <Header/>
                <div className={styles.navBarSectionContainer}>
                    <NavBar/>
                    <Section body={this.props.children}/>
                </div>
                <Footer />
             </div>
        );
    }
}

export default MainLayout;