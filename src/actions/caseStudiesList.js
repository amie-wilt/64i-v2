import fetch from 'isomorphic-fetch'

export const REQUEST_CASE_STUDIES = 'REQUEST_CASE_STUDIES';
function requestCaseStudies() {
    return {
        type: REQUEST_CASE_STUDIES
    }
}

export const RECEIVE_CASE_STUDIES = 'RECEIVE_CASE_STUDIES';
function receiveCaseStudies(caseStudies) {
    return {
        type: RECEIVE_CASE_STUDIES,
        receivedAt: Date.now(),
        caseStudies
    }
}

export const UPDATE_CASE_STUDY = 'UPDATE_CASE_STUDY';
function updateCaseStudy(id, caseStudy) {
    return {
        type: UPDATE_CASE_STUDY,
        id,
        caseStudy
    }
}

function fetchCaseStudies() {
    return dispatch => {
        dispatch(requestCaseStudies());

        return fetch(`/api/case-studies/list`)
            .then(response => response.json())
            .then(payload => dispatch(receiveCaseStudies(payload)))
            .then(payload => payload.caseStudies);
    }
}

export function fetchCaseStudiesIfNeeded() {
    return (dispatch, getState) => {
        var { caseStudiesList } = getState();
        var caseStudies = caseStudiesList.items;

        return caseStudies.length ? Promise.resolve(caseStudies) : dispatch(fetchCaseStudies());
    }
}