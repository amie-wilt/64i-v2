import { connect } from 'react-redux';
import React from 'react'
import Navigation from '../components/Navigation/Navigation';

const mapStateToProps = (state) => {
    return {
        navVisible: state.navVisible
    }
};

export default connect(mapStateToProps)(Navigation);