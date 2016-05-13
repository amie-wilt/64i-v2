import React, {Component, PropTypes} from 'react';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import OurTools from '../OurTools/OurTools';
import showCaseStudy from '../../actions/showCaseStudy';
import { hideCaseStudyModal } from '../../actions/caseStudyModal';

class OurWork extends Component {
    _showCaseStudy() {
        var dispatch = this.props.dispatch;
        var caseStudyId = this.props.params.caseStudy;

        if (caseStudyId) {
            showCaseStudy(dispatch, caseStudyId);
        } else {
            dispatch(hideCaseStudyModal());
        }
    }

    componentDidMount() {
        this._showCaseStudy();
    }

    componentDidUpdate() {
        this._showCaseStudy();
    }

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
