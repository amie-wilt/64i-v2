import React, {Component, PropTypes} from 'react';
import { employees } from '../../../data/company';
import Bio from '../Bio/Bio';
import BioModal from '../../containers/BioModal';
import styles from './TeamList.scss';

export default class TeamList extends Component {
    render() {
        var employeesTemplate = employees.map(employee => {
            return (
                <li key={employee.id}>
                    <Bio employee={employee} />
                </li>
            )
        });

        return (
            <div>
                <ul className={styles['team-list']}>{employeesTemplate}</ul>
                <BioModal />
            </div>
        );
    }
}
