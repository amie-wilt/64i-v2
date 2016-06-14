import {
    SELECT_BIO,
    RESET_SELECTED_BIO
} from '../actions/selectedBio';

export const selectedBio = (state = {}, action) => {
    switch (action.type) {
        case SELECT_BIO:
            return Object.assign({}, {
                id: action.id,
                bio: action.bio
            });
            break;
        
        case RESET_SELECTED_BIO:
            return {};
            break;
        
        default:
            return state;
    }
};