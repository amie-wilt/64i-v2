export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return !state;
            break;

        case 'HIDE_NAV':
            return false;
            break;

        case 'SHOW_NAV':
            return true;
            break;
        default:
            return state
    }
};
