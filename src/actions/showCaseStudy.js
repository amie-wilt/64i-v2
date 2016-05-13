import fetch from 'isomorphic-fetch'
import { showCaseStudyModal } from './caseStudyModal';
import setActiveCaseStudy from './activeCaseStudy';

const getCaseStudy  = (id) => {
    return fetch(`/case-studies/${id}`).then(res => res.json());
};

export default (dispatch, id) => {
    dispatch(showCaseStudyModal());

    getCaseStudy(id).then(caseStudy => {
        dispatch(setActiveCaseStudy(caseStudy));
    });
}