import React, {Component, PropTypes} from 'react';
import styles from './Testimonial.scss';

var Testimonial = ({ testimonial }) => (
    <blockquote itemScope="true" itemProp="review" itemType="https://schema.org/Review">
        <div className={styles['testimonial-content']}>
            <img src={`/public/${testimonial.companyId}.svg`} alt={testimonial.companyName} className={styles['company-logo']}/>
            <div>
                <p>{testimonial.text}</p>
            </div>
        </div>
        <small itemScope="true" itemType="http://schema.org/Person">
            <span itemProp="author" className={styles.author}>{testimonial.personName}</span>
            <span className={styles['job-title']}>
                <span itemProp="jobTitle">{testimonial.personPosition}</span>
                <span> at </span>
                <span itemProp="worksFor">{testimonial.companyName}</span>
            </span>
        </small>
    </blockquote>
);

Testimonial.propTypes = {
    testimonial: React.PropTypes.object
};

export default Testimonial;
