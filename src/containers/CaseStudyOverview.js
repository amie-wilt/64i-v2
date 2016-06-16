import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyOverview from '../components/CaseStudy/CaseStudyOverview/CaseStudyOverview';

function mapStateToProps(state) {
    return {
        overview: state.selectedCaseStudy.caseStudy ? state.selectedCaseStudy.caseStudy.overview : null,
        client: state.selectedCaseStudy.caseStudy ? state.selectedCaseStudy.caseStudy.client : null
    }
}

export default connect(mapStateToProps)(CaseStudyOverview)
