import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyDetails.css';
import ShadowedImage from '../../ShadowedImage/ShadowedImage';

var CaseStudyDetails = ({ details }) => (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li>

            </li>
        </ul>
    </div>
);

CaseStudyDetails.propTypes = {
    details: React.PropTypes.object.isRequired
};

export default CaseStudyDetails;
