import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CaseStudyModal from '../components/CaseStudy/CaseStudyModal/CaseStudyModal';
import {fetchCaseStudyIfNeeded} from '../actions/caseStudies';
import {selectCaseStudy, resetSelectedCaseStudy} from '../actions/selectedCaseStudy';
import caseStudies from '../../data/case-studies.js';

var loadCaseStudy = ({ dispatch, baseUrl, caseStudyId}) => {
    var caseStudy = caseStudies.find(cs => cs.id === caseStudyId),
        { name } = caseStudy || {};

    selectCaseStudy(caseStudyId, {
        name
    });

    return dispatch(fetchCaseStudyIfNeeded(baseUrl, caseStudyId)).then(fetchedCaseStudy => {
        dispatch(selectCaseStudy(caseStudyId, fetchedCaseStudy));
    });
};

class CaseStudyModalContainer extends Component {
    
    static fetchData({ store, url = '', baseUrl }) {
        let caseStudyId  = url.split('/our-work/case-studies/')[1],
            { dispatch } = store;

        return loadCaseStudy({ dispatch, baseUrl, caseStudyId });
    }

    _resetSelectedBio() {
        let { dispatch } = this.props;

        dispatch(resetSelectedCaseStudy());
    }

    _loadCaseStudy() {
        var { params, dispatch } = this.props,
            { caseStudyId } = params;

        loadCaseStudy({ dispatch, caseStudyId });
    }

    render() {
        return (
            <CaseStudyModal
                {...this.props}
                onOpen={this._loadCaseStudy.bind(this)}
                onClose={this._resetSelectedBio.bind(this)}
            />
        );
    }
}

export default connect()(CaseStudyModalContainer);
