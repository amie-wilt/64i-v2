import React, {Component} from 'react';
import styles from './NavLink.scss';
import classnames from 'classnames';
import {Link} from 'react-router'

var NavLink = ({ id, index, isActive, title, onClick }) => {
    var delay = `${1.25 + (index * .1)}s`;
    var linkClasses = classnames({
        [styles.activeView]: isActive,
        [styles.link]: true
    });

    return (
        <Link onClick={onClick} to={`/${id}`} style={{ animationDelay:  delay}} className={linkClasses}>{title}</Link>
    );
};

NavLink.propTypes = {
    id: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    isActive: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default NavLink;
