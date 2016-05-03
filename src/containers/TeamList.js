import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TeamList from '../components/TeamList/TeamList';
import toggleBioModal from '../actions/toggleBioModal';
import setActiveBio from '../actions/setActiveBio';

function mapStateToProps(state) {
    return {
        bioModalOpen: state.bioModalOpen,
        activeBio: state.activeBio,
        loadingBio: state.bioLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleBioModal: () => {
            dispatch(toggleBioModal());

            dispatch(setActiveBio(null));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList)
