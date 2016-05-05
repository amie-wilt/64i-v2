import React, {Component, PropTypes} from 'react';
import ProjectNav from '../ProjectNav/ProjectNav';
import styles from './FeaturedProjects.scss';

class FeaturedProjects extends Component {
    render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>Featured Projects</h2>
                <ProjectNav />
            </section>
        )
    }
}

export default FeaturedProjects
