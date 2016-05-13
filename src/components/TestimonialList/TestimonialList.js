import React, {Component, PropTypes} from 'react';
import Testimonial from '../Testimonial/Testimonial';
import styles from './TestimonialList.scss';

export default class TeamList extends Component {
    render() {
        var { testimonials } = this.props;
        
        var testimonialsList = testimonials.map(testimonial => (
            <li itemScope="true" itemType="http://schema.org/Product" key={testimonial.id} className={styles.testimonial}>
                <Testimonial testimonial={testimonial} />
            </li>
        ));

        return (
            <ul className={styles['testimonials-list']}>{testimonialsList}</ul>
        )
    }
}
