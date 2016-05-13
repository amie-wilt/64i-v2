import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import styles from './CaseStudyNavLink.scss';

var CaseStudyNavLink = ({ caseStudyId, sectionId, sectionTitle, isActive }) => {
    var linkClasses = classNames({
            [styles.navLink]: true,
            [styles.navLinkActive]: isActive
        });

    return (
        <Link className={linkClasses} to={`/our-work/case-studies/${caseStudyId}/${sectionId}`}>{sectionTitle}</Link>
    );
};

CaseStudyNavLink.propTypes = {
    caseStudyId: React.PropTypes.string.isRequired,
    sectionTitle: React.PropTypes.string.isRequired,
    sectionId: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool.isRequired
};

export default CaseStudyNavLink;
