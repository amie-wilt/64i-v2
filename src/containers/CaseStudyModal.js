import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyModal from '../components/CaseStudy/CaseStudyModal/CaseStudyModal';
import {hideCaseStudyModal, showCaseStudyModal} from '../actions/caseStudyModal';
import {fetchCaseStudyIfNeeded, selectCaseStudy} from '../actions/caseStudies';
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
        fetchCaseStudyIfNeeded: (id) => {
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
        var { params, fetchCaseStudyIfNeeded } = this.props,
            caseStudyId = params.caseStudyId;

        if (caseStudyId) {
            fetchCaseStudyIfNeeded(caseStudyId);
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
