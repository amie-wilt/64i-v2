import {
    SELECT_BIO
} from '../actions/bio';

export const selectedBio = (state = {}, action) => {
    switch (action.type) {
        case SELECT_BIO:
            return action.bio;
        default:
            return state;
    }
};