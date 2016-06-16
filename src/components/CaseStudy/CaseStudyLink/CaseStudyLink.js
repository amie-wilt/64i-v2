import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './CaseStudyLink.css';
import ImageLoader from '../../../containers/ImageLoader';

var CaseStudyLink = ({ text, url, image }) => {
    return (
        <Link className={styles.link} to={url}>
            <div className={styles.imageContainer}>
                <ImageLoader>
                    <img className={styles.image} src={image} alt={text}/>
                </ImageLoader>
            </div>
            <h3 className={styles.name}>{text}</h3>
        </Link>
    )

};

CaseStudyLink.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default CaseStudyLink