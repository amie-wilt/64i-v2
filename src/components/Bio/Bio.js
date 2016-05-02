import React, {Component, PropTypes} from 'react';
import styles from './Bio.scss';
import Dialog from 'material-ui/lib/dialog';

export default class Bio extends Component {

    render() {
        var click = () => {
            this.props.bioClick(this.props.employee.id);
        };

        var handleClose = () => {
            this.props.toggleBioModal();
        };

        return (
            <div>
                <div className={styles.bio} itemScope="" itemType="http://schema.org/Person" onClick={click}>
                    <img className={styles['bio-photo']} src={`/public/${this.props.employee.id}.jpg`} alt={this.props.employee.name} itemProp="image"/>
                    <span className={styles['bio-name']} itemProp="name">{this.props.employee.name}</span>
                </div>
                <Dialog
                    title={`${this.props.employee.name} Bio`}
                    open={this.props.bioModalOpen}
                    onRequestClose={handleClose}
                >
                    { this.props.activeBio && this.props.activeBio.overview ? this.props.activeBio.overview : '' }
                </Dialog>
            </div>
        )
    }
}
