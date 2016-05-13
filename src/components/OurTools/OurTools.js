import React, {Component, PropTypes} from 'react';
import ToolsList from '../ToolsList/ToolsList';
import styles from './OurTools.scss';

var OurTools = () => (
    <section className={styles.section}>
        <h2 className={styles.title}>Our Tools</h2>
        <div className={styles.introductionContainer}>
            <p className={styles.introduction}>We love finding new ways to make our work faster and more efficient. We use powerful frameworks like React and Angular as the backbone to make our projects beautifully modular. Git, Bower, and Yeoman allow us to quickly scaffold and maintain our code with a smooth, seamless workflow process.  React Native and Ionic allow us to easily build beautiful apps. We’re always up on the latest tools. Here's what we LOVE to use...</p>
        </div>
        <ToolsList />
    </section>
);

export default OurTools
