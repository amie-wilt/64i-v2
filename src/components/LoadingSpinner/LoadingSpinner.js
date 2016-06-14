import React from 'react'
import styles from 'semantic-ui-loader/loader.css';

var LoadingSpinner = ({ className }) => {
    let classes = `${className} ${styles.ui} ${styles.active} ${styles.inverted} ${styles.dimmer}`;

    return (
        <div className={classes}>
            <div className={`${styles.ui} ${styles.loader}`}></div>
        </div>
    )
};

export default LoadingSpinner;