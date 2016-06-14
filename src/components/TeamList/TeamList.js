import React, {Component, PropTypes} from 'react';
import BioLink from '../BioLink/BioLink';
import styles from './TeamList.css';

var TeamList = ({ employees }) => (
    <div>
        <ul className={styles.list}>
            {employees.map(employee => (
                <li key={employee.id}>
                    <BioLink id={employee.id} name={employee.name} />
                </li>
            ))}
        </ul>
    </div>
);

TeamList.propTypes = {
    employees: PropTypes.array.isRequired
};

export default TeamList;