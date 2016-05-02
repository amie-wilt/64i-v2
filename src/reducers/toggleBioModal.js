export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_BIO_MODAL':
            return !state;
            break;
        default:
            return state
    }
};
