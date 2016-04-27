import React, {Component, PropTypes} from 'react';
import testimonials from '../../data/testimonials';
import Testimonial from '../Testimonial/Testimonial';
import styles from './TestimonialList.scss';

export default class TeamList extends Component {
    render() {
        var testimonialsList = testimonials.map(testimonial => {
            return (
                <li itemScope="true" itemType="http://schema.org/Product" key={testimonial.id} className={styles.testimonial}>
                    <Testimonial testimonial={testimonial} />
                </li>
            )
        });

        return (
            <ul className={styles['testimonials-list']}>{testimonialsList}</ul>
        )
    }
}
