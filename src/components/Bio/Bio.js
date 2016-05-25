import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';
import Avatar from '../Avatar/Avatar';
import MediaQuery from 'react-responsive';

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

    var smallAvatarSrc = `/public/${bio.id}-small.jpg`;
    var largeAvatarSrc = `/public/${bio.id}-large.jpg`;

    return (
        <div className={styles.content}>
            <div className={styles.innerContent}>
                <div className={styles.avatarContainer}>
                    <MediaQuery maxWidth={850}>
                        <Avatar className={styles.avatar} src={smallAvatarSrc} alt={bio.name}/>
                    </MediaQuery>
                    <MediaQuery minWidth={850}>
                        <Avatar className={styles.avatar} src={largeAvatarSrc} alt={bio.name}/>
                    </MediaQuery>
                </div>
                <div className={styles.mainContent}>
                    <h1 className={styles.employeeName}>{bio.name}</h1>
                    { description }
                </div>
            </div>
        </div>
    )
};

Bio.propTypes = {
    bio: React.PropTypes.object.isRequired
};

export default Bio;