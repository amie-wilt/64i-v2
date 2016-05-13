import React, {PropTypes} from 'react';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import OurTools from '../OurTools/OurTools';

var OurWork = ({ children }) => (
    <div>
        <FeaturedProjects />
        <OurTools />
        {children}
    </div>
);

OurWork.propTypes = {
    children: PropTypes.element
};

export default OurWork;
