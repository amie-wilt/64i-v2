import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import styles from './ProjectLink.scss';
import classNames from 'classnames';

class Project extends Component {

    render() {
        var { project } = this.props;
        var linkClass = classNames(styles.link, this.props.className);
        
        return (
            <Link className={linkClass} to={`/our-work/case-studies/${project.id}/overview`}>
                <img className={styles.image} src={`/public/case-studies/${project.id}/overview.jpg`} alt={project.name} />
                <h3 className={styles.name}>{project.name}</h3>
            </Link>
        )
    }
}

export default Project