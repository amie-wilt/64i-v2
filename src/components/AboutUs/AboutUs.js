import React, {Component} from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js';
import Testimonials from '../Testimonials/Testimonials.js';
import { employees } from '../../../data/company';
import showBio from '../../actions/showBio';

class AboutUs extends Component {
    componentDidMount() {
        var dispatch = this.props.dispatch;
        var employeeId = this.props.params.employeeId;

        if(employeeId) {
            let employee = employees.find(employee => employee.id === employeeId);

            if(employee) {
                showBio(dispatch, employee);
            }
        }
    }

    render() {
        return (
            <div>
                <WhoWeAre />
                <Testimonials />
            </div>
        )
    }
}

export default AboutUs;
