import React, {Component} from 'react'
import Header from '../Header/Header'
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

