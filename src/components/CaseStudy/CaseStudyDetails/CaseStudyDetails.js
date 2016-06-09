import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyDetails.css';

var CaseStudyOverview = ({ caseStudy }) => (
    <div className={styles.container}>
        <h1>HEY DETAILS!</h1>
    </div>
);

CaseStudyOverview.propTypes = {
    caseStudy: React.PropTypes.object.isRequired
};

export default CaseStudyOverview;
