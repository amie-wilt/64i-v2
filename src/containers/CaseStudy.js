import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CaseStudy from '../components/CaseStudy/CaseStudy';

function mapStateToProps(state) {
    return {
        caseStudy: state.activeCaseStudy,
        activeView: state.activeView
    }
}

export default connect(mapStateToProps)(CaseStudy)
