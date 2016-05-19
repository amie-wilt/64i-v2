import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyOverview.scss';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import ImageLoader from '../../../containers/ImageLoader';

var CaseStudyOverview = ({ caseStudy, overview }) => {
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
        var image = `/public/case-studies/${caseStudy.id}/overview.jpg`;

        content = (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <ImageLoader src={image}>
                        <div className={styles.imageWrapper}>
                            <img src={image} />    
                        </div>
                    </ImageLoader>
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

    return loading ? loading : content;
};

CaseStudyOverview.propTypes = {
    caseStudy: React.PropTypes.object.isRequired,
    overview: React.PropTypes.object
};

export default CaseStudyOverview;
