import React, {Component, PropTypes} from 'react';
import CaseStudyLink from '../CaseStudy/CaseStudyLink/CaseStudyLink';
import styles from './CaseStudiesNav.css';

var CaseStudiesNav = ({ caseStudies }) => (
    <div>
        <nav className={styles.nav}>
            {caseStudies.map(caseStudy => (
                <CaseStudyLink
                    className={styles.link}
                    caseStudyId={caseStudy.id}
                    caseStudyTitle={caseStudy.name}
                    key={caseStudy.id}
                />
            ))}
        </nav>
    </div>
);

CaseStudiesNav.propTypes = {
    caseStudies: React.PropTypes.array.isRequired
};

export default CaseStudiesNav;