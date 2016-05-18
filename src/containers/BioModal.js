import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import BioModal from '../components/BioModal/BioModal';
import {fetchBioIfNeeded, selectBio} from '../actions/bio';
import {employees} from '../../data/company';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        bio: state.selectedBio
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectBio: (bio) => {
            dispatch(selectBio(bio));
        },
        fetchBioIfNeeded: (id) => {
            return dispatch(fetchBioIfNeeded(id));
        }
    }
}

class BioModalContainer extends Component {

    _loadBio() {
        var { params, fetchBioIfNeeded, bio, selectBio } = this.props,
            { employeeId } = params;

        if (employeeId) {
            fetchBioIfNeeded(employeeId).then(fetchedBio => {
                var newBio = Object.assign({}, bio, fetchedBio);

                selectBio(newBio);
            });
        }
    }

    componentWillMount() {
        var { params, selectBio } = this.props,
            { employeeId } = params,
            bio = employees.find(employee => employee.id === employeeId);

        selectBio(bio);
    }

    render() {
        return this.props.bio && this.props.bio.id ? <BioModal onModalOpen={this._loadBio.bind(this)} {...this.props} /> : <div></div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BioModalContainer))
