import React, { Component } from 'react'
import styles from './Header.scss'
import Logo from '../Logo/Logo';
import Navigation from '../../containers/Navigation';
import NavToggle from '../../containers/NavToggle';

class Header extends Component {
    render() {
        var activeView = this.props.activeView.split('/')[1];

        return (
            <header className={styles.header}>
                <div className={styles['logo-container']}>
                    <Logo />
                </div>
                <NavToggle />
                <div className="navigation">
                    <Navigation activeView={activeView} />
                </div>
            </header>
        )   
    }
}

export default Header;