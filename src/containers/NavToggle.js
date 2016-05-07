import { connect } from 'react-redux';
import React from 'react'
import { toggleNav } from '../actions/nav';
import NavToggle from '../components/NavToggle/NavToggle';

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(toggleNav())
        }
    }
};

export default connect(null, mapDispatchToProps)(NavToggle);
