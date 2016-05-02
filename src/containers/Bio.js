import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Bio from '../components/Bio/Bio';
import toggleBioModal from '../actions/toggleBioModal';
import setActiveBio from '../actions/setActiveBio';

import fetch from 'isomorphic-fetch'


function getBio(id) {
    return fetch(`/employee/${id}`).then(res => res.json());
}

function mapStateToProps(state) {
    return {
        bioModalOpen: state.bioModalOpen,
        activeBio: state.activeBio
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bioClick: (employeeId) => {
            dispatch(toggleBioModal());
            getBio(employeeId).then(bio => {
                dispatch(setActiveBio(bio));
            });
        },
        toggleBioModal: () => {
            dispatch(toggleBioModal());

            dispatch(setActiveBio(null));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)
