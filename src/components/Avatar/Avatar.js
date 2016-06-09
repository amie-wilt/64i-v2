import React, {PropTypes} from 'react'
import styles from './Avatar.css'
import classNames from 'classnames';
import ImageLoader from '../../containers/ImageLoader';

var Avatar = ({ className = '', alt, src }) => (
    <ImageLoader className={classNames(styles.avatar, className)}>
        <img itemProp="image" src={src} alt={alt}/>
    </ImageLoader>
);

Avatar.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Avatar;