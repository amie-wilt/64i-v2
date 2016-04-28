import React from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/* generic styles */
import reset from '../../styles/reset.css'
import styles from './App.css'
import base from '../../styles/base.css'

Object.assign(reset, styles, base);

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
