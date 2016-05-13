import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyModal from '../components/CaseStudy/CaseStudyModal/CaseStudyModal';
import {hideCaseStudyModal, showCaseStudyModal} from '../actions/caseStudyModal';
import {fetchCaseStudyIfNeeded} from '../actions/caseStudies';
import {selectCaseStudy} from '../actions/selectedCaseStudy';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        open: state.caseStudyModalOpen,
        caseStudy: state.selectedCaseStudy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hide: () => {
            dispatch(hideCaseStudyModal());
        },
        fetchCaseStudy: (id) => {
            var caseStudy = { id };

            dispatch(selectCaseStudy(caseStudy));
            dispatch(fetchCaseStudyIfNeeded(id)).then(fetchedCaseStudy => {
                Object.assign(caseStudy, fetchedCaseStudy.caseStudy);
                dispatch(showCaseStudyModal());
                dispatch(selectCaseStudy(caseStudy));
            });
        }
    }
}

class CaseStudyModalContainer extends Component {
    componentDidMount() {
        var { params, fetchCaseStudy } = this.props,
            caseStudyId = params.caseStudyId;

        if (caseStudyId) {
            fetchCaseStudy(caseStudyId);
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
