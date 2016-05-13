import React, {PropTypes} from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js';
import Testimonials from '../Testimonials/Testimonials.js';

var AboutUs = ({ children }) => (
    <div>
        <WhoWeAre />
        <Testimonials />
        {children}
    </div>
);

AboutUs.propTypes = {
    children: PropTypes.element
};


export default AboutUs;