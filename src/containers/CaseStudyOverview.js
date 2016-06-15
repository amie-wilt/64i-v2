import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyOverview from '../components/CaseStudy/CaseStudyOverview/CaseStudyOverview';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        id: state.selectedCaseStudy.id,
        caseStudy: state.selectedCaseStudy.caseStudy,
        overview: state.selectedCaseStudy.caseStudy.overview,
    }
}

export default connect(mapStateToProps)(withRouter(CaseStudyOverview))
