import React, {PropTypes} from 'react';
import styles from './CaseStudy.scss';
import CaseStudyNav from '../../containers/CaseStudyNav';

var CaseStudy = ({ children, caseStudy }) => (
    <section className={styles.content}>
        <h1 className={styles.title}>{caseStudy.name}</h1>
        <div className={styles.sectionContainer}>
            {children}
        </div>
        <CaseStudyNav caseStudyId={caseStudy.id} />
    </section>
);

CaseStudy.propTypes = {
    children: React.PropTypes.element.isRequired,
    caseStudy: React.PropTypes.object.isRequired
};

export default CaseStudy;
