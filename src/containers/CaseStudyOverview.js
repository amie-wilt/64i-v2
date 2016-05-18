import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyOverview from '../components/CaseStudy/CaseStudyOverview/CaseStudyOverview';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        caseStudy: state.selectedCaseStudy
    }
}

export default connect(mapStateToProps)(withRouter(CaseStudyOverview))
