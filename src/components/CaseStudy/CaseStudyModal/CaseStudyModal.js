import React, {Component} from 'react'
import Modal from '../../../components/Modal/Modal';
import CaseStudy from '../../../containers/CaseStudy';

var CaseStudyModal = ({ children, onOpen, onClose, id }) => {
    var caseStudyTemplate = id ? <CaseStudy children={children}/> : null;

    return (
        <Modal
            backLink="/our-work"
            onOpen={onOpen}
            onClose={onClose}
        >
            {caseStudyTemplate}
        </Modal>
    );
};

CaseStudyModal.propTypes = {
    children: React.PropTypes.element,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
};

export default CaseStudyModal
