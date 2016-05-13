import React, {PropTypes} from 'react'
import styles from './Avatar.scss'
import classNames from 'classnames';

var Avatar = ({ className = '', alt, src }) => (
    <div>
        <img itemProp="image" className={classNames(styles.avatar, className)} src={src} alt={alt}/>
    </div>
);

Avatar.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Avatar;