import React, {Component, PropTypes} from 'react';
import CaseStudyLink from '../CaseStudy/CaseStudyLink/CaseStudyLink';
import styles from './CaseStudiesNav.css';

var CaseStudiesNav = ({ caseStudies }) => (
    <div>
        <nav className={styles.nav}>
            {caseStudies.map(caseStudy => (
                <div key={caseStudy.id} className={styles.link}>
                    <CaseStudyLink
                        url={`/our-work/case-studies/${caseStudy.id}/overview`}
                        text={caseStudy.name}
                        image={caseStudy.image}
                    />
                </div>
            ))}
        </nav>
    </div>
);

CaseStudiesNav.propTypes = {
    caseStudies: React.PropTypes.array.isRequired
};

export default CaseStudiesNav;