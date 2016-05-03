export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_BIO_LOADING':
            return !state;
            break;
        default:
            return state
    }
};
