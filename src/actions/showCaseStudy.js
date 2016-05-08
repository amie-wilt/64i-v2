import fetch from 'isomorphic-fetch'
import { showCaseStudyModal } from './caseStudyModal';
import setActiveCaseStudy from './activeCaseStudy';

const getCaseStudy  = (id) => {
    return fetch(`/case-studies/${id}`).then(res => res.json());
};

export default (dispatch, caseStudy) => {
    dispatch(showCaseStudyModal());
    dispatch(setActiveCaseStudy(caseStudy));

    getCaseStudy(caseStudy.id).then(fetchedCaseStudy => {
        caseStudy = Object.assign(caseStudy, fetchedCaseStudy);

        dispatch(setActiveCaseStudy(caseStudy));
    });
}