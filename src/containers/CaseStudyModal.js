import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyModal from '../components/CaseStudy/CaseStudyModal/CaseStudyModal';
import {fetchCaseStudyIfNeeded, updateCaseStudy} from '../actions/caseStudies';
import {selectCaseStudy} from '../actions/selectedCaseStudy';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
    return {
        caseStudy: state.selectedCaseStudy,
        caseStudiesList: state.caseStudiesList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectCaseStudy: (caseStudy) => {
            dispatch(selectCaseStudy(caseStudy));
        },
        fetchCaseStudy: (id) => {
            return dispatch(fetchCaseStudyIfNeeded(id));
        }
    };
}

class CaseStudyModalContainer extends Component {
    _loadCaseStudy() {
        var { params, fetchCaseStudy, caseStudy, selectCaseStudy } = this.props,
            { caseStudyId } = params;

        if (caseStudyId) {
            fetchCaseStudy(caseStudyId).then(fetchedCaseStudy => {
                var newCaseStudy = Object.assign({}, caseStudy, fetchedCaseStudy);
                
                selectCaseStudy(newCaseStudy);
            });
        }
    }

    componentWillMount() {
        var { params, selectCaseStudy } = this.props,
            { caseStudyId } = params,
            caseStudy = {
                id: caseStudyId
            };

        var existingCaseStudy = this.props.caseStudiesList.items.find(caseStudy => caseStudy.id === caseStudyId);

        if(existingCaseStudy) {
            Object.assign({}, caseStudy, existingCaseStudy);
        }

        selectCaseStudy(caseStudy);
    }

    render() {
        return this.props.caseStudy && this.props.caseStudy.id ? <CaseStudyModal onOpen={this._loadCaseStudy.bind(this)} {...this.props} /> : <div></div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CaseStudyModalContainer))
