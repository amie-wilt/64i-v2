import React, {PropTypes} from 'react';
import styles from './CaseStudy.css';
import CaseStudyNav from '../../containers/CaseStudyNav';

var CaseStudy = ({ children, caseStudy, id }) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{caseStudy.name}</h1>
                <main className={styles.main}>{children}</main>
            </div>
            <div className={styles.nav}>
                <CaseStudyNav caseStudyId={id} />
            </div>
        </div>
    </div>
);

CaseStudy.propTypes = {
    children: React.PropTypes.element.isRequired,
    id: React.PropTypes.string,
    caseStudy: React.PropTypes.object,
};

export default CaseStudy;
