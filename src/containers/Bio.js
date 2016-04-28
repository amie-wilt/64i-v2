import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Bio from '../components/Bio/Bio';

import fetch from 'isomorphic-fetch'

function getBio(id) {
    fetch(`/employee/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
        });

}


function mapDispatchToProps(dispatch) {
    return {
        onClick: (employeeId) => {
            getBio(employeeId);
        }
    }
}

export default connect(null, mapDispatchToProps)(Bio)
