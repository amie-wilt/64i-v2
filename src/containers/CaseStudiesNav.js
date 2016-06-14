import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CaseStudyNav from '../components/CaseStudiesNav/CaseStudiesNav';

function mapStateToProps(state) {
    return {
        caseStudies: state.caseStudiesList.items
    }
}

export default connect(mapStateToProps)(CaseStudyNav);
