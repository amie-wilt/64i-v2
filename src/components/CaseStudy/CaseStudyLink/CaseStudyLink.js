import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './CaseStudyLink.scss';
import classNames from 'classnames';

var CaseStudyLink = ({ caseStudyId, caseStudyTitle, className = ''}) => (
    <Link className={classNames(styles.link, className)} to={`/our-work/case-studies/${caseStudyId}/overview`}>
        <img className={styles.image} src={`/public/case-studies/${caseStudyId}/overview.jpg`} alt={caseStudyTitle}/>
        <h3 className={styles.name}>{caseStudyTitle}</h3>
    </Link>
);

CaseStudyLink.propTypes = {
    caseStudyId: PropTypes.string.isRequired,
    caseStudyTitle: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default CaseStudyLink