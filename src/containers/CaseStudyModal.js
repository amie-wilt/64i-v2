import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CaseStudyModal from '../components/CaseStudyModal/CaseStudyModal';

function mapStateToProps(state) {
    return {
        open: state.caseStudyModalOpen
    }
}

export default connect(mapStateToProps)(CaseStudyModal)
