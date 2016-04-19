import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';

export default class Bio extends Component {
    render() {
        return (
            <div className={styles.bio} itemScope="" itemType="http://schema.org/Person">
                <img className={styles['bio-photo']} src={`/public/${this.props.user.id}.jpg`} alt={this.props.user.name} itemProp="image"/>
                <span className={styles['bio-name']} itemProp="name">{this.props.user.name}</span>
            </div>
        )
    }
}
