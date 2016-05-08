import React, {Component, PropTypes} from 'react';
import styles from './Tool.scss';

class Tool extends Component {

    render() {
        var { tool } = this.props;

        return (
            <a href={tool.url}>
                <img className={styles.image} src={`/public/${tool.id}.svg`} alt={tool.name} />
            </a>
        )
    }
}

export default Tool