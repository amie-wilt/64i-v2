import React from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'

/* generic styles */
import styles from './App.css'
import base from '../../styles/base.css'
import normalize from '../../styles/normalize.css'

Object.assign(styles, base, normalize);

function App({ children }) {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles['main-content']}>{children}</main>
        </div>
    );
};

module.exports = connect(
    null
)(App);
