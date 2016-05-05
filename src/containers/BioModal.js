import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import BioModal from '../components/BioModal/BioModal';
import toggleBioModal from '../actions/toggleBioModal';
import setActiveBio from '../actions/setActiveBio';

function mapStateToProps(state) {
    return {
        open: state.bioModalOpen,
        bio: state.activeBio,
        loadingBio: state.bioLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => {
            dispatch(toggleBioModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BioModal)
