import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import styles from './CaseStudyNavLink.scss';

var CaseStudyNavLink = ({ caseStudyId, sectionId, sectionTitle, isActive, index }) => {
    var delay = `${.5 + (index * .1)}s`;
    var linkClasses = classNames({
            [styles.link]: true,
            [styles.active]: isActive
        });

    return (
        <Link style={{ animationDelay:  delay}} className={linkClasses} to={`/our-work/case-studies/${caseStudyId}/${sectionId}`}>{sectionTitle}</Link>
    );
};

CaseStudyNavLink.propTypes = {
    caseStudyId: React.PropTypes.string.isRequired,
    sectionTitle: React.PropTypes.string.isRequired,
    sectionId: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool.isRequired,
    index: React.PropTypes.number.isRequired
};

export default CaseStudyNavLink;
