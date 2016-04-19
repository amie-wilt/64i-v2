import React from 'react'
import styles from './NavToggle.scss'

function NavToggle({ onClick }) {
    return (
        <div className={styles.toggle} onClick={onClick}>
            <span></span>
        </div>
    )
}

export default NavToggle;