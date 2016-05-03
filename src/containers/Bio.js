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
        bioClick: (employeeId, name) => {
            dispatch(toggleBioModal());

            var bio = {
                name
            };

            dispatch(toggleBioLoading());
            dispatch(setActiveBio(bio));

            getBio(employeeId).then(fetchedBio => {
                bio = Object.assign({
                    ...fetchedBio,
                    name
                });

                dispatch(setActiveBio(bio));
                dispatch(toggleBioLoading());
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)
