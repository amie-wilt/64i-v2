import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyOverview from '../components/CaseStudy/CaseStudyOverview/CaseStudyOverview';

function mapStateToProps(state) {
    return {
        id: state.selectedCaseStudy.id,
        overview: state.selectedCaseStudy.caseStudy ? state.selectedCaseStudy.caseStudy.overview : null
    }
}

export default connect(mapStateToProps)(CaseStudyOverview)
