import React, {Component} from 'react'
import Header from '../Header/Header'
import setActiveView from '../../actions/activeView';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/* generic styles */
import reset from '../../styles/reset.css'
import styles from './App.scss'
import base from '../../styles/base.css'
import typography from '../../styles/typography.scss'

Object.assign(reset, styles, base);

var App = ({ children }) => (
    <div className={styles.app}>
        <Header />
        <main className={styles['main-content']}>
            {children}
        </main>
    </div>
);

App.propTypes = {
    children: React.PropTypes.element
};

export default App;

