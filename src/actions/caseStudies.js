import fetch from 'isomorphic-fetch'

export const REQUEST_CASE_STUDY = 'REQUEST_CASE_STUDY';
function requestCaseStudy() {
    return {
        type: REQUEST_CASE_STUDY
    }
}

export const RECEIVE_CASE_STUDY = 'RECEIVE_CASE_STUDY';
function receiveCaseStudy(caseStudy) {
    return {
        type: RECEIVE_CASE_STUDY,
        receivedAt: Date.now(),
        caseStudy
    }
}

function fetchCaseStudy(id) {
    return dispatch => {
        dispatch(requestCaseStudy());

        return fetch(`/api/case-studies/${id}`)
            .then(response => response.json())
            .then(caseStudy => dispatch(receiveCaseStudy(caseStudy)))
    }
}

function shouldFetchCaseStudy(state, id) {
    var { caseStudies } = state;

    return !caseStudies[id] || (caseStudies[id] && !caseStudies[id].caseStudy);
}

export function fetchCaseStudyIfNeeded(id) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (shouldFetchCaseStudy(getState(), id)) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchCaseStudy(id))
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}