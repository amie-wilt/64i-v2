import React from 'react'
import CircularProgress from 'material-ui/lib/circular-progress';
import styles from './ImageLoader.scss'
import classNames from 'classnames';

var ImageLoader = ({ loaded, className, children }) => {
    var image = loaded ? children : null,
        loading = !loaded ? (
            <div className={styles.loader}>
                <CircularProgress />
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