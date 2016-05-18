import {
    REQUEST_CASE_STUDY,
    RECEIVE_CASE_STUDY
} from '../actions/caseStudies';

const caseStudy = (state, action) => {
    switch (action.type) {
        case REQUEST_CASE_STUDY:
            return {
                id: action.id,
                isFetching: true,
                caseStudy: null
            };

        case RECEIVE_CASE_STUDY:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt,
                caseStudy: action.caseStudy
            });

        default:
            return state
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case REQUEST_CASE_STUDY:
        case RECEIVE_CASE_STUDY:
            state.map(caseStudy => caseStudy(caseStudy, action));
            break;

        default:
            return state
    }
};
