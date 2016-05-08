import React, {Component, PropTypes} from 'react';
import tools from '../../../data/tools';
import Tool from '../Tool/Tool';
import styles from './ToolsList.scss';

class ToolList extends Component {
    render() {
        var toolsList = tools.map(tool => {
            return (
                <li className={styles.tool} key={tool.id}>
                    <Tool tool={tool} />
                </li>
            )
        });

        return (
            <ul className={styles.list}>{toolsList}</ul>
        );
    }
}

export default ToolList