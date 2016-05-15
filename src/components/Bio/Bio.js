import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';
import ImageLoader from '../../containers/ImageLoader';
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

    return (
        <div className={styles.content}>
            <MediaQuery maxDeviceWidth={600}>
                <ImageLoader className={styles.avatarContainer} src={smallAvatarSrc}>
                    <Avatar className={styles.avatar} src={smallAvatarSrc} alt={bio.name}/>
                </ImageLoader>
            </MediaQuery>
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