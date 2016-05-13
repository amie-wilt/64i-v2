import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import BioModal from '../components/BioModal/BioModal';
import {hideBioModal, showBioModal} from '../actions/bioModal';
import {fetchBioIfNeeded, selectBio} from '../actions/bios';
import {employees} from '../../data/company';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        open: state.bioModalOpen,
        bio: state.selectedBio,
        loadingBio: state.bioLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hide: () => {
            dispatch(hideBioModal());
        },
        fetchBioIfNeeded: (id) => {
            var bio = employees.find(employee => employee.id === id);

            dispatch(selectBio(bio));
            dispatch(fetchBioIfNeeded(id)).then(fetchedBio => {
                if(fetchedBio) {
                    Object.assign(bio, fetchedBio.bio);
                }

                dispatch(showBioModal());
                dispatch(selectBio(bio));
            });
        }
    }
}

class BioModalContainer extends Component {
    componentDidMount() {
        var { params, fetchBioIfNeeded } = this.props,
            employeeId = params.employeeId;

        if (employeeId) {
            fetchBioIfNeeded(employeeId);
        }
    }

    componentWillUnmount() {
        var { hide } = this.props;

        hide();
    }

    render() {
        return (
            <BioModal {...this.props} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BioModalContainer))
