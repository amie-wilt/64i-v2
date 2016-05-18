import {
    SELECT_CASE_STUDY
} from '../actions/selectedCaseStudy';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_CASE_STUDY:
            return action.caseStudy;
            break;
        default:
            return state;
    }
};