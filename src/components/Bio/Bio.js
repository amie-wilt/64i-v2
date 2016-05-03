import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';

export default class Bio extends Component {

    render() {
        var click = () => {
            this.props.bioClick(this.props.employee.id, this.props.employee.name);
        };
        
        return (
            <div className={styles.bio} itemScope="" itemType="http://schema.org/Person" onClick={click}>
                <img className={styles['bio-photo']} src={`/public/${this.props.employee.id}.jpg`} alt={this.props.employee.name} itemProp="image"/>
                <span className={styles['bio-name']} itemProp="name">{this.props.employee.name}</span>
            </div>
        )
    }
}
