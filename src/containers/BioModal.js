import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import BioModal from '../components/BioModal/BioModal';

function mapStateToProps(state) {
    return {
        open: state.bioModalOpen,
        bio: state.activeBio,
        loadingBio: state.bioLoading
    }
}

export default connect(mapStateToProps)(BioModal)
