import React, {PropTypes} from 'react';
import Testimonial from '../Testimonial/Testimonial';
import styles from './TestimonialList.css';

var TeamList = ({ testimonials }) => (
    <ul className={styles['testimonials-list']}>
        {testimonials.map(testimonial => (
            <li itemScope="true" itemType="http://schema.org/Product" key={testimonial.id} className={styles.testimonial}>
                <Testimonial testimonial={testimonial} />
            </li>
        ))}
    </ul>
);

TeamList.propTypes = {
    testimonials: PropTypes.array.isRequired
};

export default TeamList;
