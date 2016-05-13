import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CaseStudy from '../components/CaseStudy/CaseStudy';

var mapStateToProps = (state) => {
    return {
        caseStudy: state.selectedCaseStudy
    };
};

export default connect(mapStateToProps)(CaseStudy)
