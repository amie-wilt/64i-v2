import React, {Component, PropTypes} from 'react';
import projects from '../../../data/projects';
import Project from '../Project/Project';
import styles from './ProjectNav.scss';

class ProjectNav extends Component {
    render() {
        var projectLinks = projects.map(project => {
            return (
                <a className={styles.link} key={project.id}>
                    <Project project={project} />
                </a>
            )
        });

        return (
            <nav className={styles.nav}>{projectLinks}</nav>
        );
    }
}

export default ProjectNav