import React, {Component, PropTypes} from 'react';
import {employees} from '../../../data/company';
import BioLink from '../BioLink/BioLink';
import styles from './TeamList.scss';

var TeamList = () => (
    <div>
        <ul className={styles['team-list']}>
            {employees.map(employee => (
                <li key={employee.id}>
                    <BioLink id={employee.id} name={employee.name} />
                </li>
            ))}
        </ul>
    </div>
);

export default TeamList;