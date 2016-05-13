import {
    REQUEST_BIO, RECEIVE_BIO, SELECT_BIO
} from '../actions/bios';

const bio = (state, action) => {
    switch (action.type) {
        case REQUEST_BIO:
            return {
                id: action.id,
                isFetching: true,
                bio: null
            };

        case RECEIVE_BIO:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt,
                bio: action.bio
            });

        default:
            return state
    }
};


export const selectedBio = (state = {}, action) => {
    switch (action.type) {
        case SELECT_BIO:
            return action.bio;
        default:
            return state;
    }
};

export const bios = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_BIO:
        case RECEIVE_BIO:
            return Object.assign({}, state, {
                [action.id]: bio(undefined, action)
            });
        default:
            return state
    }
};
