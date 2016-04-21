import React, {Component, PropTypes} from 'react';
import testimonials from '../../data/testimonials';
import Testimonial from '../Testimonial/Testimonial';
import styles from './TestimonialList.scss';

export default class TeamList extends Component {
    render() {
        var testimonialsList = testimonials.map(testimonial => {
            return (
                <li key={testimonial.id}>
                    <Testimonial testimonial={testimonial} />
                </li>
            )
        });

        return (
            <ul>{testimonialsList}</ul>
        )
    }
}
