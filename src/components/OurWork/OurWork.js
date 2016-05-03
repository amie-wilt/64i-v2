import React, {Component, PropTypes} from 'react';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import OurTools from '../OurTools/OurTools';

class OurWork extends Component {
    render() {
        return (
            <div>
                <FeaturedProjects />
                <OurTools />
            </div>
        )
    }
}

export default OurWork
