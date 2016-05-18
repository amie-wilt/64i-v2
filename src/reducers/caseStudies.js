import {
    REQUEST_CASE_STUDY,
    RECEIVE_CASE_STUDY
} from '../actions/caseStudies';

var caseStudy = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CASE_STUDY:
            return Object.assign({}, state, {
                id: action.id,
                isFetching: true
            });

        case RECEIVE_CASE_STUDY:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt,
                caseStudy: action.caseStudy,
                id: action.id
            });

        default:
            return state
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case REQUEST_CASE_STUDY:
            return [
                ...state,
                caseStudy(undefined, action)
            ];

        case RECEIVE_CASE_STUDY:
            return state.map(cs => caseStudy(undefined, action));
            break;

        default:
            return state
    }
};
