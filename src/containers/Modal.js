import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Modal from '../components/Modal/Modal';
import {withRouter} from 'react-router';
import store from '../clientStore';

class ModalContainer extends Component {
    static defaultProps = {
        store
    };

    render() {
        return (
            <Modal {...this.props} />
        )
    }   
}

export default connect()(withRouter(ModalContainer))
