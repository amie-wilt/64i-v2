import React, {Component, PropTypes} from 'react';
import tools from '../../../data/tools';
import Tool from '../Tool/Tool';
import styles from './ToolsList.css';

var ToolList = () => (
    <ul className={styles.list}>
        {tools.map(tool => (
            <li className={styles.tool} key={tool.id}>
                <Tool toolId={tool.id} toolName={tool.name} toolUrl={tool.url} />
            </li>
        ))}
    </ul>
);

export default ToolList