import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyOverview.css';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ShadowedImage from '../../ShadowedImage/ShadowedImage';

var CaseStudyOverview = ({ id, overview }) => {
    var loading = !overview ? (
        <LoadingSpinner />
    ) : null;

    var content;
    if(overview) {
        let { client } = overview;
        
        let objectiveRender = () => {
            return {
                __html: overview.objective
            }
        };
        
        content = (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <ShadowedImage className={styles.imageWrapper}>
                        <img src={`/public/case-studies/${id}/overview.jpg`}/>   
                    </ShadowedImage>
                </div>
                <div className={styles.infoContainer}>
                    <dl className={styles.detailsList}>
                        <dt className={styles.client}>Client:</dt>
                        <dd className={styles.client}><img className={styles.clientLogo} src={`/public/${client.id}.svg`} alt={client.name} /></dd>
                        <dt className={styles.timeline}>Timeline:</dt>
                        <dd className={styles.timeline}>{overview.timeline}</dd>
                    </dl>
                    <div className={styles.objective}>
                        <div className={styles.description} dangerouslySetInnerHTML={objectiveRender()}></div>
                    </div>
                </div>
            </div>
        );
    }

    return loading || content;
};

CaseStudyOverview.propTypes = {
    id: React.PropTypes.string.isRequired,
    overview: React.PropTypes.object
};

export default CaseStudyOverview;
