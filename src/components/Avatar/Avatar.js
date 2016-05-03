import React, { Component } from 'react'
import styles from './Avatar.scss'
import classNames from 'classnames';

class Avatar extends Component {
    render() {
        var avatarClasses = classNames(styles.avatar, this.props.className || '');

        return (
            <img itemProp="image" className={avatarClasses} src={this.props.src} alt={this.props.alt} />
        )
    }
}

export default Avatar