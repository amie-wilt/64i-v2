import React from 'react'
import styles from './ImageLoader.css'
import classNames from 'classnames';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

var ImageLoader = ({ loaded, className, children }) => {
    var loaderClasses = classNames(className, styles.container, {
        [styles.loaded]: loaded
    });

    return (
        <div className={loaderClasses}>
            <LoadingSpinner className={styles.spinner} />
            {children}
        </div>
    )
};

export default ImageLoader;