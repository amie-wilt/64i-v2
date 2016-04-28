import React, {Component, PropTypes} from 'react';
import company from '../../../data/company';
import Bio from '../../containers/Bio';
import styles from './TeamList.scss';

export default class TeamList extends Component {
    render() {
        var employees = company.employees.map(employee => {
            return (
                <li key={employee.id}>
                    <Bio user={employee} />
                </li>
            )
        });

        return (
            <ul className={styles['team-list']}>{employees}</ul>
        )
    }
}
