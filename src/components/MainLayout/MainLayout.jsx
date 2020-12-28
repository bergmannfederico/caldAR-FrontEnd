import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import styles from "./mainLayaout.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title:state.buildings.title,
  };
};
const MainLayout = ({children}) => {
    return (
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.navBarSectionContainer}>
          <NavBar />
         <Section>
          {children}
         </Section>
        </div>
            
        <Footer />
      </div>
    );
}

export default connect(mapStateToProps, null)(MainLayout);
