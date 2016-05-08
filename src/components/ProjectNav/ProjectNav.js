import React, {Component, PropTypes} from 'react';
import projects from '../../../data/projects';
import ProjectLink from '../ProjectLink/ProjectLink';
import styles from './ProjectNav.scss';
import CaseStudyModal from '../../containers/CaseStudyModal';

class ProjectNav extends Component {
    render() {
        var projectLinks = projects.map(project => (
            <ProjectLink className={styles.link} project={project} key={project.id}/>
        ));

        return (
            <div>
                <nav className={styles.nav}>
                    {projectLinks}
                </nav>
                <CaseStudyModal />
            </div>
        );
    }
}

export default ProjectNav