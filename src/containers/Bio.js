import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Bio from '../components/Bio/Bio';
import showBio from '../actions/showBio';

function mapStateToProps(state) {
    return {
        bioModalOpen: state.bioModalOpen,
        activeBio: state.activeBio
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bioClick: (employee) => {
            showBio(dispatch, employee);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)
