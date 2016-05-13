import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink/NavLink';
import { hideNav } from '../actions/nav';
import { withRouter } from 'react-router';

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => {
            dispatch(hideNav())
        }
    }
}

class NavLinkContainer extends Component {
    render() {
        var { router, id } = this.props;
        var isActive = router.isActive(id);

        return (
            <NavLink {...this.props} isActive={isActive} />
        )
    }
}

export default connect(mapDispatchToProps)(withRouter(NavLinkContainer))
