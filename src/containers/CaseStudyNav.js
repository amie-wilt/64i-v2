import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CaseStudyNav from '../components/CaseStudy/CaseStudyNav/CaseStudyNav';

function mapStateToProps(state) {
    return {
        activeView: state.activeView
    }
}

export default connect(mapStateToProps)(CaseStudyNav)
