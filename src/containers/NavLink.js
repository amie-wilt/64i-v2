import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink/NavLink';
import { withRouter } from 'react-router';

var mapStateToProps = (state) => {
    return {
        activeView: state.activeView
    }
};

class NavLinkContainer extends Component {
    render() {
        var { activeView, id } = this.props;
        var isActive = activeView.indexOf(`/${id}`) === 0;

        return (
            <NavLink {...this.props} isActive={isActive} />
        )
    }
}

export default connect(mapStateToProps)(withRouter(NavLinkContainer))
