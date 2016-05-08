import React, {Component, PropTypes} from 'react';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import OurTools from '../OurTools/OurTools';
import projects from '../../../data/projects';
import showCaseStudy from '../../actions/showCaseStudy';
import { hideCaseStudyModal } from '../../actions/caseStudyModal';

class OurWork extends Component {
    _showCaseStudy() {
        var dispatch = this.props.dispatch;
        var caseStudyId = this.props.params.caseStudy;

        if (caseStudyId) {
            let caseStudy = projects.find(project => project.id === caseStudyId);

            if (caseStudy) {
                showCaseStudy(dispatch, caseStudy);
            }
        } else {
            dispatch(hideCaseStudyModal());
        }
    }

    componentWillMount() {
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
