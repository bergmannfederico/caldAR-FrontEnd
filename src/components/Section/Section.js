import React, {Component} from 'react';
import styles from './section.module.css';


class Section extends Component {
    render() {
        return (
            <section className={styles.sectionContainer}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;