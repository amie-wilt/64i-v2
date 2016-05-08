export default (state = false, action) => {
    switch (action.type) {
        case 'SHOW_CASE_STUDY_MODAL':
            return true;
            break;

        case 'HIDE_CASE_STUDY_MODAL':
            return false;
            break;

        default:
            return state
    }
};
