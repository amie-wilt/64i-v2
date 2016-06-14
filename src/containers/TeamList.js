import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import TeamList from '../components/TeamList/TeamList';

const mapStateToProps = (state) => {
    return {
        employees: state.teamList.items
    }
};

export default connect(mapStateToProps)(TeamList)
