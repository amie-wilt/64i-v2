import React, {Component, PropTypes} from 'react';
import styles from './Testimonial.scss';

class Testimonial extends Component {
    render() {
        return (
            <blockquote itemScope="true" itemType="https://schema.org/Review">
                <div>
                    <img src={`/public/${this.props.testimonial.companyLogo}`} alt={this.props.testimonial.companyName}/>
                </div>
                <div>{this.props.testimonial.personName}</div>
                <div>{this.props.testimonial.personPosition}</div>
                <div>{this.props.testimonial.companyName}</div>
                <div>{this.props.testimonial.text}</div>
            </blockquote>
        )
    }
}

Testimonial.propTypes = {
    testimonial: React.PropTypes.object
};

export default Testimonial;
