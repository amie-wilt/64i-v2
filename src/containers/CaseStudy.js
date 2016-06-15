import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudy from '../components/CaseStudy/CaseStudy';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

var mapStateToProps = (state) => {
    return {
        caseStudy: state.selectedCaseStudy.caseStudy,
        id: state.selectedCaseStudy.id
    };
};

class CaseStudyContainer extends Component {
    render() {
        var { caseStudy } = this.props;

        return caseStudy ? <CaseStudy {...this.props} /> : <LoadingSpinner />;
    }
}

export default connect(mapStateToProps)(CaseStudyContainer)
