import React, {Component, PropTypes} from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js';
import Testimonials from '../Testimonials/Testimonials.js';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <WhoWeAre />
                <Testimonials />
            </div>
        )
    }
}
