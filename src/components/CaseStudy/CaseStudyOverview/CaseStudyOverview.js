import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyOverview.scss';

var CaseStudyOverview = ({ caseStudy }) => {
    let objectiveRender = () => {
        return {
            __html: caseStudy.objective
        }
    };

    var objective = (
        <div className={styles.description} dangerouslySetInnerHTML={objectiveRender()}></div>
    );

    var { client } = caseStudy;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            </div>
        </div>
    )
};

CaseStudyOverview.propTypes = {
    caseStudy: React.PropTypes.object.isRequired
};

export default CaseStudyOverview;
