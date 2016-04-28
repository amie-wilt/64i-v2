import React, {Component, PropTypes} from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js';
import Testimonials from '../Testimonials/Testimonials.js';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <RaisedButton label="Please work" />
                <WhoWeAre />
                <Testimonials />
            </div>
        )
    }
}
