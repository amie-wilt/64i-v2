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
            .then(payload => payload.bio)
    }
}

export function fetchBioIfNeeded(id) {
    return (dispatch, getState) => {
        var { bios } = getState();
        var bio = bios[id] && bios[id].bio ? bios[id].bio : null;

        return bio ? Promise.resolve(bio) : dispatch(fetchBio(id));
    }
}