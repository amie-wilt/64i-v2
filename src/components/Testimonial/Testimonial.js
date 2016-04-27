import React, {Component, PropTypes} from 'react';
import styles from './Testimonial.scss';

class Testimonial extends Component {
    render() {
        return (
            <blockquote itemScope="true" itemProp="review" itemType="https://schema.org/Review">
                <div className={styles['testimonial-content']}>
                    <img src={`/public/${this.props.testimonial.companyLogo}`} alt={this.props.testimonial.companyName} className={styles['company-logo']}/>
                    <div>
                        <p>{this.props.testimonial.text}</p>
                    </div>
                </div>
                <small itemScope="true" itemType="http://schema.org/Person">
                    <span itemProp="author" className={styles.author}>{this.props.testimonial.personName}</span>
                    <span className={styles['job-title']}>
                        <span itemProp="jobTitle">{this.props.testimonial.personPosition}</span>
                        <span> at </span>
                        <span itemProp="worksFor">{this.props.testimonial.companyName}</span>
                    </span>
                </small>
            </blockquote>
        )
    }
}

Testimonial.propTypes = {
    testimonial: React.PropTypes.object
};

export default Testimonial;
