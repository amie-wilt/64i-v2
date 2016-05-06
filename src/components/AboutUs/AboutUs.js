import React, {Component} from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js';
import Testimonials from '../Testimonials/Testimonials.js';
import {employees} from '../../../data/company';
import showBio from '../../actions/showBio';
import {hideBioModal} from '../../actions/bioModal';

class AboutUs extends Component {
    _showBio() {
        var dispatch = this.props.dispatch;
        var employeeId = this.props.params.employeeId;

        if (employeeId) {
            let employee = employees.find(employee => employee.id === employeeId);

            if (employee) {
                showBio(dispatch, employee);
            }
        } else {
            dispatch(hideBioModal());
        }
    }

    componentWillMount() {
        this._showBio();
    }

    componentDidUpdate() {
        this._showBio();
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
