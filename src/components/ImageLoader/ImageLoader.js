import React from 'react'
import styles from './ImageLoader.scss'
import classNames from 'classnames';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

var ImageLoader = ({ loaded, className, children }) => {
    var image = loaded ? children : null,
        loading = !loaded ? (
            <div className={styles.loader}>
                <LoadingSpinner />
            </div>
        ) : null;

    return (
        <div className={classNames(styles.container, className)}>
            {loading}
            {image}
        </div>
    )
};

export default ImageLoader;