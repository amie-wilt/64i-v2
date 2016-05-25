import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './CaseStudyLink.scss';
import classNames from 'classnames';
import ImageLoader from '../../../containers/ImageLoader';

var CaseStudyLink = ({ caseStudyId, caseStudyTitle, className = '' }) => {
    let imgSrc = `/public/case-studies/${caseStudyId}/link.png`;

    return (
        <Link className={classNames(styles.link, className)} to={`/our-work/case-studies/${caseStudyId}/overview`}>
            <div className={styles.imageContainer}>
                <ImageLoader>
                    <img className={styles.image} src={imgSrc} alt={caseStudyTitle}/>
                </ImageLoader>
            </div>
            <h3 className={styles.name}>{caseStudyTitle}</h3>
        </Link>
    )

};

CaseStudyLink.propTypes = {
    caseStudyId: PropTypes.string.isRequired,
    caseStudyTitle: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default CaseStudyLink