import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CaseStudy from '../components/CaseStudy/CaseStudy';

function mapStateToProps(state) {
    return {
        activeView: state.activeView,
        caseStudy: state.activeCaseStudy
    }
}

export default connect(mapStateToProps)(CaseStudy)
