import React from 'react'
import {Link} from 'react-router'
import styles from './Logo.scss'
import company from '../../data/company';

function Logo() {
    return (
        <Link to="/" className={styles['logo-link']}>
            <img className={styles.logo} src={`/public/logo-web.svg`} alt={company.name}/>
        </Link>
    )
}

export default Logo