import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CaseStudyNav from '../components/CaseStudiesNav/CaseStudiesNav';
import { fetchCaseStudiesIfNeeded } from '../actions/caseStudies';

function mapStateToProps(state) {
    return {
        caseStudies: state.caseStudies.items
    }
}

function mapDispatchToProps(dispatch) {
    dispatch(fetchCaseStudiesIfNeeded());
    
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudyNav)
