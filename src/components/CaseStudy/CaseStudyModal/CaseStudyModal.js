import React, {Component} from 'react'
import Modal from '../../../containers/Modal';
import CaseStudy from '../../../containers/CaseStudy';
import styles from './CaseStudyModal.css';
import Clear from '../../../../node_modules/material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

var CaseStudyModal = ({ children, onOpen, onClose }) => (
    <Modal onOpen={onOpen} onClose={onClose}>
        <Link to="/our-work">
            <Clear className={styles.closeButton} color={'#333'}/>
        </Link>
        <CaseStudy children={children} />
    </Modal>
);

CaseStudyModal.propTypes = {
    children: React.PropTypes.element,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
};

export default CaseStudyModal
