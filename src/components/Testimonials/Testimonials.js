import React, {Component, PropTypes} from 'react';
import TestimonialList from '../../containers/TestimonialList';
import styles from './Testimonials.css';

var Testimonials = () => (
    <section className={styles.section}>
        <h2 className={styles.title}>We Love Agencies</h2>
        <p className={styles.introduction}>And they love us..</p>
        <div>
            <TestimonialList />
        </div>
    </section>
);

export default Testimonials;