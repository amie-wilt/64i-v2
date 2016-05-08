export default (state = null, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CASE_STUDY':
            return action.caseStudy;
            break;
        default:
            return state
    }
};
