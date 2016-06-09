import React, {Component, PropTypes} from 'react';
import CaseStudyNav from '../../containers/CaseStudiesNav';
import styles from './FeaturedProjects.css';

var FeaturedProjects = () => (
    <section className={styles.section}>
        <h2 className={styles.title}>Featured Projects</h2>
        <CaseStudyNav />
    </section>
);

export default FeaturedProjects;
