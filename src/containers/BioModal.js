import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import BioModal from '../components/BioModal/BioModal';
import {fetchBioIfNeeded} from '../actions/bio';
import {selectBio, resetSelectedBio} from '../actions/selectedBio';
import employees from '../../data/employees.js';

function mapStateToProps(state) {
    return {
        id: state.selectedBio.id,
        bio: state.selectedBio.bio
    }
}

var loadBio = ({ dispatch, baseUrl, employeeId}) => {
    var employee = employees.find(employee => employee.id === employeeId),
        { name } = employee || {};

    dispatch(selectBio(employeeId, {
        name
    }));

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
                onOpen={this._loadBio.bind(this)}
                onClose={this._resetSelectedBio.bind(this)}
                {...this.props}
            />
        );
    }
}

export default connect(mapStateToProps)(BioModalContainer);
