import React, {Component} from 'react'
import Header from '../Header/Header'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import 'reset-css/reset.css';
import '../../styles/base.css'
import '../../styles/typography.css'
import styles from './App.css'

var App = ({ children }) => (
    <div className={styles.app}>
        <Header />
        <main className={styles.content}>
            {children}
        </main>
    </div>
);

App.propTypes = {
    children: React.PropTypes.element
};

export default App;

