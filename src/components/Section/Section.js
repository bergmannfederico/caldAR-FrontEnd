import React, {Component} from 'react';
import styles from './section.module.css';


class Section extends Component{
    render() {
        return (
             <div className={styles.sectionContainer}>
                 {this.props.body}
             </div>
        );
    }
}

export default Section;