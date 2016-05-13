import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../components/App/App';
import { setActiveView } from '../actions/activeView';

var mapDispatchToProps = (dispatch) => {
    return {
        setView: (view) => {
            dispatch(setActiveView(view))
        }
    }
};

class AppContainer extends Component {
    _setView() {
        var { setView, location } = this.props;

        setView(location.pathname);
    }

    componentDidMount() {
        this._setView();    
    }

    componentDidUpdate() {
        this._setView();
    }

    render() {
        return (
            <App {...this.props} />
        )
    }
}

export default connect(null, mapDispatchToProps)(AppContainer)
