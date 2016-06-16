import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyDetails from '../components/CaseStudy/CaseStudyDetails/CaseStudyDetails';

function mapStateToProps(state) {
    console.log(state);
    
    return {
        details: state.selectedCaseStudy.caseStudy.details
    }
}

export default connect(mapStateToProps)(CaseStudyDetails)
