import React, {Component} from 'react'
import Modal from '../../containers/Modal';
import Bio from '../Bio/Bio';
import styles from './BioModal.css';
import Clear from 'material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

var BioModal = ({ bio, onOpen, onClose, id }) => {
    var bioTemplate = id ? <Bio bio={bio} id={id} /> : null;

    return (
        <Modal className={styles.modal} onOpen={onOpen} onClose={onClose}>
            <Link to="/about-us">
                <Clear className={styles.closeButton} color={'#333'}/>
            </Link>
            {bioTemplate}
        </Modal>
    )
};

BioModal.propTypes = {
    id: React.PropTypes.string,
    bio: React.PropTypes.object,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
};

export default BioModal;