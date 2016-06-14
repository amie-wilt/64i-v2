import {
    SELECT_BIO,
    RESET_SELECTED_BIO
} from '../actions/bio';

export const selectedBio = (state = {}, action) => {
    switch (action.type) {
        case SELECT_BIO:
            return Object.assign({}, {
                id: action.id,
                bio: action.bio
            });
        
        case RESET_SELECTED_BIO:
            return {};
        
        default:
            return state;
    }
};