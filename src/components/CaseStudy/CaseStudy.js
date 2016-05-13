import React, {PropTypes} from 'react';
import styles from './CaseStudy.scss';
import CaseStudyNav from '../../containers/CaseStudyNav';

var CaseStudy = ({ children, caseStudy }) => {
    return (
        <section className={styles.content}>
            <h1 className={styles.title}>{caseStudy.name}</h1>
            <div className={styles.sectionContainer}>
                {children}
            </div>
            <CaseStudyNav caseStudyId={caseStudy.id} />
        </section>
    )
};

export default CaseStudy;
