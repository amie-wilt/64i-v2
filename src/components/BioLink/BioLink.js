import React, {PropTypes} from 'react';
import styles from './BioLink.scss';
import Avatar from '../Avatar/Avatar';
import {Link} from 'react-router';

var BioLink = ({ id, name }) => (
    <Link className={styles.bio} itemScope="" itemType="http://schema.org/Person" to={`/about-us/employees/${id}`}>
        <Avatar className={styles.photo} src={`/public/${id}-small.jpg`} alt={name}/>
        <span className={styles.name} itemProp="name">{name}</span>
    </Link>
);

BioLink.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default BioLink;