import React, {Component, PropTypes} from 'react';
import styles from './Project.scss';

class Project extends Component {

    render() {

        return (
            <div>
                <img className={styles.image} src={`/public/${this.props.project.id}.jpg`} alt={this.props.project.name} />
                <h3 className={styles.name}>{this.props.project.name}</h3>
            </div>
        )
    }
}

export default Project