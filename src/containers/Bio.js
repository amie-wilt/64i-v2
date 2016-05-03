import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Bio from '../components/Bio/Bio';
import toggleBioModal from '../actions/toggleBioModal';
import setActiveBio from '../actions/setActiveBio';
import toggleBioLoading from '../actions/toggleBioLoading';

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
        bioClick: (employee) => {
            dispatch(toggleBioModal());
            dispatch(toggleBioLoading());
            dispatch(setActiveBio(employee));

            getBio(employee.id).then(fetchedBio => {
                employee = Object.assign(employee, fetchedBio);

                dispatch(setActiveBio(employee));
                dispatch(toggleBioLoading());
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)
