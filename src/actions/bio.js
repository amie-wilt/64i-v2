import fetch from 'isomorphic-fetch'

export const SELECT_BIO = 'SELECT_BIO';
export function selectBio(bio) {
    return {
        type: SELECT_BIO,
        bio
    }
}

export const REQUEST_BIO = 'REQUEST_BIO';
function requestBio(id) {
    return {
        type: REQUEST_BIO,
        id
    }
}

export const RECEIVE_BIO = 'RECEIVE_BIO';
function receiveBio(bio, id) {
    return {
        type: RECEIVE_BIO,
        receivedAt: Date.now(),
        id,
        bio
    }
}

function fetchBio(id) {
    return dispatch => {
        dispatch(requestBio());

        return fetch(`/api/bios/${id}`)
            .then(response => response.json())
            .then(bio => dispatch(receiveBio(bio, id)))
    }
}

function shouldFetchBio(state, id) {
    return !state.bios[id] || (state.bios[id] && !state.bios[id].bio);
}

export function fetchBioIfNeeded(id) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (shouldFetchBio(getState(), id)) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchBio(id))
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}