import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';
import Avatar from '../Avatar/Avatar';

var Bio = ({ bio }) => {
    var overview = bio.overview,
        description;

    if (overview) {
        let overviewMarkup = () => {
            return {
                __html: overview
            }
        };

        description = (
            <div className={styles.description} dangerouslySetInnerHTML={overviewMarkup()}></div>
        );
    }

    return (
        <div className={styles.content}>
            <div className={styles.avatarContainer}>
                <Avatar className={styles.avatar} src={`/public/${bio.id}-large.jpg`} alt={bio.name}/>
            </div>
            <div className={styles.mainContent}>
                <h1 className={styles.employeeName}>{bio.name}</h1>
                { description }
            </div>
        </div>
    )
};

Bio.propTypes = {
    bio: React.PropTypes.object.isRequired
};

export default Bio;