import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';
import Avatar from '../Avatar/Avatar';

export default class Bio extends Component {

    render() {
        var click = () => {
            this.props.bioClick(this.props.employee);
        };

        return (
            <div className={styles.bio} itemScope="" itemType="http://schema.org/Person" onClick={click}>
                <Avatar className={styles['bio-photo']} src={`/public/${this.props.employee.id}.jpg`} alt={this.props.employee.name} />
                <span className={styles['bio-name']} itemProp="name">{this.props.employee.name}</span>
            </div>
        )
    }
}
