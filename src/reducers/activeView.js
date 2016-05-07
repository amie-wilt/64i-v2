export default (state = '/', action) => {
    switch (action.type) {
        case 'SET_ACTIVE_VIEW':
            return action.view;
            break;

        default:
            return state
    }
};
