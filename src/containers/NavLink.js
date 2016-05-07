import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink/NavLink';
import { hideNav } from '../actions/nav';

function mapStateToProps(state) {
    return {
        activeView: state.activeView
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => {
            dispatch(hideNav())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLink)
