import React, { Component } from 'react'
import styles from './Header.scss'
import Logo from '../Logo/Logo';
import Navigation from '../../containers/Navigation';
import NavToggle from '../../containers/NavToggle';

var Header = () => (
    <header className={styles.header}>
        <div className={styles['logo-container']}>
            <Logo />
        </div>
        <NavToggle />
        <div className="navigation">
            <Navigation />
        </div>
    </header>
);

export default Header;
