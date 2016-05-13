import React, {Component} from 'react'
import Modal from '../../Modal/Modal';
import CaseStudy from '../../../containers/CaseStudy';
import styles from './CaseStudyModal.scss';
import Clear from '../../../../node_modules/material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

var CaseStudyModal = ({ open, children }) => (
    <Modal open={open}>
        <Link to="/our-work">
            <Clear className={styles.closeButton} color={'#333'}/>
        </Link>
        <CaseStudy children={children} />
    </Modal>
);

CaseStudyModal.propTypes = {
    open: React.PropTypes.bool.isRequired
};

export default CaseStudyModal
