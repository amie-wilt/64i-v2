import React, {Component} from 'react'
import Modal from '../Modal/Modal';
import Bio from '../Bio/Bio';
import styles from './BioModal.scss';
import Clear from 'material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

class BioModal extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    render() {
        return (
            <Modal open={this.props.open} router={this.context.router}>
                <Link to="/about-us">
                    <Clear className={styles.closeButton} color={'#333'}/>
                </Link>
                <Bio bio={this.props.bio} />
            </Modal>
        )
    }
}

export default BioModal