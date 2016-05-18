import {connect} from 'react-redux';
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigation/Navigation';
import pages from '../../data/pages';
import { hideNav } from '../actions/nav';

const mapStateToProps = (state) => {
    return {
        visible: state.navVisible
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hide: () => {
            dispatch(hideNav())
        }
    }
};

class NavigationContainer extends Component {
    static defaultProps = {
        pages
    };

    componentDidMount() {
        var { router, hide } = this.props;

        router.listenBefore(() => {
            hide();
        });
    }

    render() {
        return (
            <Navigation {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationContainer));