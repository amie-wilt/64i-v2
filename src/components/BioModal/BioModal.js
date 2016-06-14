import React, {Component} from 'react'
import Modal from '../../components/Modal/Modal';
import Bio from '../Bio/Bio';

var BioModal = ({ bio, onOpen, onClose, id }) => {
    var bioTemplate = id ? <Bio bio={bio} id={id} /> : null;

    return (
        <Modal 
            backLink="/about-us"
            onOpen={onOpen}
            onClose={onClose}
        >
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