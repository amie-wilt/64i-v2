import React, {Component, PropTypes} from 'react';
import TestimonialList from '../TestimonialList/TestimonialList';

if(process.browser) {
    var styles = require('./Testimonials.scss');
}

export default class Testimonials extends Component {
    render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>We Love Agencies</h2>
                <p className={styles.introduction}>And they love us..</p>
                <div>
                    <TestimonialList />
                </div>
            </section>
        )
    }
}
