import React, {Component} from 'react'
import Modal from '../../../components/Modal/Modal';
import CaseStudy from '../../../containers/CaseStudy';

var CaseStudyModal = ({ children, onOpen, onClose }) => (
    <Modal
        backLink="/our-work"
        onOpen={onOpen}
        onClose={onClose}
    >
        <CaseStudy>{children}</CaseStudy>
    </Modal>
);

CaseStudyModal.propTypes = {
    children: React.PropTypes.element,
    caseStudy: React.PropTypes.object,
    id: React.PropTypes.string,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
};

export default CaseStudyModal
