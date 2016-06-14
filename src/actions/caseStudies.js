import fetch from 'isomorphic-fetch'

export const REQUEST_CASE_STUDY = 'REQUEST_CASE_STUDY';
function requestCaseStudy(id) {
    return {
        type: REQUEST_CASE_STUDY,
        id
    }
}

export const RECEIVE_CASE_STUDY = 'RECEIVE_CASE_STUDY';
function receiveCaseStudy(caseStudy, id) {
    return {
        type: RECEIVE_CASE_STUDY,
        receivedAt: Date.now(),
        caseStudy,
        id
    }
}

function fetchCaseStudy(url = '', id) {
    return dispatch => {
        dispatch(requestCaseStudy(id));

        return fetch(`${url}/api/case-studies/${id}`)
            .then(response => response.json())
            .then(caseStudy => dispatch(receiveCaseStudy(caseStudy, id)))
            .then(payload => payload.caseStudy);
    }
}

export function fetchCaseStudyIfNeeded(url, id) {
    return (dispatch, getState) => {
        var { caseStudies } = getState();
        var caseStudy = caseStudies.find(caseStudy => caseStudy.id);

        return caseStudy ? Promise.resolve(caseStudy.caseStudy) : dispatch(fetchCaseStudy(url, id));
    }
}

