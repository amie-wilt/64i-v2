export default (state = null, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_BIO':
            return action.bio;
            break;
        default:
            return state
    }
};
