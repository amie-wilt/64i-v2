export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return !state;
            break;
        default:
            return state
    }
};
