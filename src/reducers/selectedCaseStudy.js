import {
    SELECT_CASE_STUDY,
    RESET_SELECTED_CASE_STUDY
} from '../actions/selectedCaseStudy';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_CASE_STUDY:
            return Object.assign({}, {
                id: action.id,
                caseStudy: action.caseStudy
            });
            break;
        
        case RESET_SELECTED_CASE_STUDY:
            return {};
        default:
            return state;
    }
};