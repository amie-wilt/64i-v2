import React, {Component} from 'react'
import Modal from '../../containers/Modal';
import Bio from '../Bio/Bio';
import styles from './BioModal.scss';
import Clear from 'material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

export default ({ open, bio }) => {
    return (
        <Modal open={open}>
            <Link to="/about-us">
                <Clear className={styles.closeButton} color={'#333'}/>
            </Link>
            <Bio bio={bio} />
        </Modal>
    )
};