import { connect } from 'react-redux';
import React, { Component } from 'react'
import Navigation from '../components/Navigation/Navigation';
import pages from '../../data/pages';

const mapStateToProps = (state) => {
    return {
        navVisible: state.navVisible
    }
};

class NavigationContainer extends Component {
    static defaultProps = {
        pages
    };

    render() {
        return (
            <Navigation {...this.props} />
        )
    }
}

export default connect(mapStateToProps)(NavigationContainer);