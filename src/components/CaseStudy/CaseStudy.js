import React, {PropTypes} from 'react';
import styles from './CaseStudy.css';
import CaseStudyNav from '../../containers/CaseStudyNav';

var CaseStudy = ({ children, caseStudy, id }) => (
    <section className={styles.content}>
        <div className={styles.innerContainer}>
            <h1 className={styles.title}>{caseStudy.name}</h1>
            <div className={styles.container}>{children}</div>
            <CaseStudyNav caseStudyId={id} />
        </div>
    </section>
);

CaseStudy.propTypes = {
    children: React.PropTypes.element.isRequired,
    id: React.PropTypes.string,
    caseStudy: React.PropTypes.object,
};

export default CaseStudy;
