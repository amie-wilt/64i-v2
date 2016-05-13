import React, {Component, PropTypes} from 'react';
import styles from './BioLink.scss';
import Avatar from '../Avatar/Avatar';
import {Link} from 'react-router';

class BioLink extends Component {

    render() {
        var { employee } = this.props;
        var href = `/about-us/employees/${employee.id}`;

        return (
            <Link className={styles.bio} itemScope="" itemType="http://schema.org/Person" to={href}>
                <Avatar className={styles['bio-photo']} src={`/public/${employee.id}-small.jpg`} alt={employee.name}/>
                <span className={styles['bio-name']} itemProp="name">{employee.name}</span>
            </Link>
        )
    }
}

export default BioLink;