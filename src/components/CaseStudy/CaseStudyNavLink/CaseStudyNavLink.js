import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import styles from './CaseStudyNavLink.css';

var CaseStudyNavLink = ({ text, isActive, url }) => {
    var linkClasses = classNames(styles.link, {
        [styles.active]: isActive
    });

    return (
        <Link className={linkClasses} to={url}>{text}</Link>
    );
};

CaseStudyNavLink.propTypes = {
    url: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool.isRequired
};

export default CaseStudyNavLink;
