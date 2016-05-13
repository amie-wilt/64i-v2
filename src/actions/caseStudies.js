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

function fetchCaseStudy(id) {
    return dispatch => {
        dispatch(requestCaseStudy(id));

        return fetch(`/api/case-studies/${id}`)
            .then(response => response.json())
            .then(payload => dispatch(receiveCaseStudy(payload, id)))
            .then(payload => payload.caseStudy)
    }
}

export function fetchCaseStudyIfNeeded(id) {
    return (dispatch, getState) => {
        var { caseStudies } = getState();
        var caseStudy = caseStudies[id] && caseStudies[id].caseStudy ? caseStudies[id].caseStudy : null;

        return caseStudy ? Promise.resolve(caseStudy) : dispatch(fetchCaseStudy(id));
    }
}