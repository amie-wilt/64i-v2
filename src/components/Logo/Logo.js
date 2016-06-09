import React from 'react'
import {Link} from 'react-router'
import styles from './Logo.css'
import { companyName } from '../../../data/company';

var Logo = () => (
    <Link to="/" className={styles['logo-link']}>
        <img className={styles.logo} src={`/public/logo-web.svg`} alt={companyName}/>
    </Link>
);

export default Logo;