import React, {Component} from 'react';
import styles from './ShadowedImage.css';
import ImageLoader from '../../containers/ImageLoader';

var ShadowedImage = ({ children }) => {
    return (
        <ImageLoader>
            <div className={styles.wrapper}>
                {children}
            </div>
        </ImageLoader>
    );
};

ShadowedImage.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default ShadowedImage;
