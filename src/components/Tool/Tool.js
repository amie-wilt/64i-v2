import React, {PropTypes} from 'react';
import styles from './Tool.scss';

var Tool = ({ toolId, toolName, toolUrl }) => (
    <a href={toolUrl}>
        <img className={styles.image} src={`/public/${toolId}.svg`} alt={toolName}/>
    </a>
);

Tool.propTypes = {
    toolId: PropTypes.string.isRequired,
    toolName: PropTypes.string.isRequired,
    toolUrl: PropTypes.string.isRequired
};

export default Tool