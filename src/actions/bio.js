import fetch from 'isomorphic-fetch'

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
        receivedAt: Date.now (),
        id,
        bio
    }
}

function fetchBio(url = '', id) {
    return dispatch => {
        dispatch(requestBio());

        return fetch(`${url}/api/bios/${id}`)
            .then(response => response.json())
            .then(bio => dispatch(receiveBio(bio, id)))
            .then(payload => payload.bio)
    }
}

export function fetchBioIfNeeded(url, id) {
    return (dispatch, getState) => {
        var { bios } = getState();
        var bio = bios[id] && bios[id].bio ? bios[id].bio : null;

        return bio ? Promise.resolve(bio) : dispatch(fetchBio(url, id));
    }
}