import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router';

export default class Bio extends Component {

    render() {
        var employee = this.props.employee;
        
        return (
            <Link className={styles.bio} itemScope="" itemType="http://schema.org/Person" to={`/about-us/employees/${employee.id}`}>
                <Avatar className={styles['bio-photo']} src={`/public/${employee.id}.jpg`} alt={employee.name} />
                <span className={styles['bio-name']} itemProp="name">{employee.name}</span>
            </Link>
        )
    }
}
