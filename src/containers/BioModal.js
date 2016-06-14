import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import BioModal from '../components/BioModal/BioModal';
import {fetchBioIfNeeded, selectBio, resetSelectedBio} from '../actions/bio';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        id: state.selectedBio.id,
        bio: state.selectedBio.bio
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectBio: (bio) => {
            dispatch(selectBio(bio));
        },
        fetchBioIfNeeded: (url, id) => {
            return dispatch(fetchBioIfNeeded(url, id));
        },
        dispatch
    }
}

var loadBio = ({ dispatch, baseUrl, employeeId}) => {
    selectBio(employeeId);

    return dispatch(fetchBioIfNeeded(baseUrl, employeeId)).then(fetchedBio => {
        dispatch(selectBio(employeeId, fetchedBio));
    });
};

class BioModalContainer extends Component {

    static fetchData({ store, url = '', baseUrl }) {
        let employeeId  = url.split('/about-us/employees/')[1],
            { dispatch } = store;

        return loadBio({ dispatch, baseUrl, employeeId });
    }

    _resetSelectedBio() {
        let { dispatch } = this.props;
        
        dispatch(resetSelectedBio());
    }

    _loadBio() {
        var { params, dispatch } = this.props,
            { employeeId } = params;

        loadBio({ dispatch, employeeId });
    }

    render() {
        return (
            <BioModal
                onModalOpen={this._loadBio.bind(this)}
                onModalClose={this._resetSelectedBio.bind(this)}
                {...this.props}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BioModalContainer))
