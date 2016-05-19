import React, {Component} from 'react'
import Modal from '../../containers/Modal';
import Bio from '../Bio/Bio';
import styles from './BioModal.scss';
import Clear from 'material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

var BioModal = ({ bio, onModalOpen }) => {
    return (
        <Modal className={styles.modal} onOpen={onModalOpen}>
            <Link to="/about-us">
                <Clear className={styles.closeButton} color={'#333'}/>
            </Link>
            <Bio bio={bio} />
        </Modal>
    )
};

BioModal.defaultProps = {
    bio: React.PropTypes.object.isRequired,
    onModalOpen: React.PropTypes.func
};

export default BioModal;