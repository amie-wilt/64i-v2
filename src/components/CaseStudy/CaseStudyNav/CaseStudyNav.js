import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyNav.scss';
import CaseStudyNavLink from '../CaseStudyNavLink/CaseStudyNavLink';

var CaseStudyNav = ({ sections, caseStudyId }) => (
    <div className={styles.navContainer}>
        <nav role="navigation" className={styles.nav}>
            {sections.map(section => (
                <CaseStudyNavLink key={section.id} />
            ))}
        </nav>
    </div>
);

CaseStudyNav.propTypes = {
    caseStudyId: React.PropTypes.string.isRequired,
    sections: React.PropTypes.array.isRequired
};

export default CaseStudyNav;
