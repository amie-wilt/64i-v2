import { connect } from 'react-redux';
import React from 'react'
import styles from './Header.scss'
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavToggle from '../NavToggle/NavToggle';
import { toggleNav } from '../../actions/navVisible';

function Header({ onToggleClick, navVisible }) {
    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <Logo />
            </div>
            <NavToggle onClick={onToggleClick} />
            <div className="navigation">
                <Navigation active={navVisible} />
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        navVisible: state.navVisible
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleClick: () => {
            dispatch(toggleNav())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);