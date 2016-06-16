import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyOverview.css';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ShadowedImage from '../../ShadowedImage/ShadowedImage';

var CaseStudyOverview = ({ overview, client }) => {
    var loading = !overview ? <LoadingSpinner /> : null;

    var content;
    if(overview) {
        let objectiveRender = () => {
            return {
                __html: overview.objective
            }
        };
        
        content = (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <ShadowedImage className={styles.imageWrapper}>
                        <img src={overview.image}/>
                    </ShadowedImage>
                </div>
                <div className={styles.infoContainer}>
                    <dl className={styles.detailsList}>
                        <dt className={styles.client}>Client:</dt>
                        <dd className={styles.client}>
                            <img className={styles.clientLogo} src={client.logo} alt={client.name} />
                        </dd>
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
    overview: React.PropTypes.object,
    client: React.PropTypes.object
};

export default CaseStudyOverview;
