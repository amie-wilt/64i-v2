import React, {Component, PropTypes} from 'react';
import styles from './Bio.css';
import Avatar from '../Avatar/Avatar';
import MediaQuery from 'react-responsive';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

var Bio = ({ id, bio }) => {
    var overview;

    if (bio.overview) {
        let overviewMarkup = () => {
            return {
                __html: bio.overview
            }
        };

        overview = (
            <div className={styles.overview} dangerouslySetInnerHTML={overviewMarkup()}></div>
        );
    } else {
        overview = <LoadingSpinner />
    }

    var smallAvatarSrc = `/public/${id}-small.jpg`;
    var largeAvatarSrc = `/public/${id}-large.jpg`;

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
                    { overview }
                </div>
            </div>
        </div>
    )
};

Bio.propTypes = {
    id: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object
};

export default Bio;