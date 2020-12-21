import React, { Component } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import styles from './mainLayaout.module.css';

class MainLayout extends Component {

    render() {
        console.log(this.props.children);
        return (
             <div className={styles.appContainer}>
                <Header/>
                <div className={styles.navBarSectionContainer}>
                    <NavBar/>
                    <Section>
                        {this.props.children}
                    </Section>
                </div>
                <Footer />
             </div>
        );
    }
}

export default MainLayout;