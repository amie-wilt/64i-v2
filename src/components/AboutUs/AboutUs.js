import React, {Component, PropTypes} from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js';
import Testimonials from '../Testimonials/Testimonials.js';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <WhoWeAre />
                <Testimonials />
            </div>
        )
    }
}

export default AboutUs
