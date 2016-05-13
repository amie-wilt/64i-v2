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

function fetchCaseStudies() {
    return dispatch => {
        dispatch(requestCaseStudies());

        return fetch(`/api/case-studies/list`)
            .then(response => response.json())
            .then(caseStudies => dispatch(receiveCaseStudies(caseStudies)))
    }
}

function shouldFetchCaseStudies(state) {
    var { caseStudiesList } = state;

    return !caseStudiesList.items.length;
}

export function fetchCaseStudiesIfNeeded() {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (shouldFetchCaseStudies(getState())) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchCaseStudies())
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}