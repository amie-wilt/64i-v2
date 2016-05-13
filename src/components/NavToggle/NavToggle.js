import React, { Component } from 'react'
import styles from './NavToggle.scss'

var NavToggle = ({ onClick }) => (
    <div className={styles.toggle} onClick={onClick}>
        <span></span>
    </div>
);

NavToggle.propTypes = {
    onClick: React.PropTypes.func.isRequired
};

export default NavToggle;