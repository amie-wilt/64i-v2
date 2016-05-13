import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyDetails from '../components/CaseStudy/CaseStudyDetails/CaseStudyDetails';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        caseStudy: state.activeCaseStudy
    }
}

export default connect(mapStateToProps)(withRouter(CaseStudyDetails))
