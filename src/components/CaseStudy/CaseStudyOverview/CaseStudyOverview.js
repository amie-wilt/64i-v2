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

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            </div>
            <div className={styles.infoContainer}>
                <dl>
                    <dt className={styles.client}></dt>
                    <dt className={styles.timeline}></dt>
                </dl>
                <div className={styles.objective}>
                    { objective }
                </div>
            </div>
        </div>
    )
}

export default CaseStudyOverview;
