import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyModal from '../components/CaseStudy/CaseStudyModal/CaseStudyModal';
import {hideCaseStudyModal, showCaseStudyModal} from '../actions/caseStudyModal';
import {fetchBioIfNeeded, selectBio} from '../actions/caseStudies';
import {employees} from '../../data/company';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        open: state.caseStudyModalOpen,
        bio: state.selectedBio,
        loadingBio: state.bioLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hide: () => {
            dispatch(hideCaseStudyModal());
        },
        fetchBioIfNeeded: (id) => {
            var bio = employees.find(employee => employee.id === id);

            dispatch(fetchBioIfNeeded(id)).then(fetchedBio => {
                if(fetchedBio) {
                    Object.assign(bio, fetchedBio.bio);
                }

                dispatch(showCaseStudyModal());
                dispatch(selectBio(bio));
            });
        }
    }
}

class CaseStudyModalContainer extends Component {
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
            <CaseStudyModal {...this.props} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CaseStudyModalContainer))
