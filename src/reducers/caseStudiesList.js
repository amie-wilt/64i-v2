import {
    REQUEST_CASE_STUDIES,
    RECEIVE_CASE_STUDIES
} from '../actions/caseStudiesList';

export default (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_CASE_STUDIES:
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case RECEIVE_CASE_STUDIES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.caseStudies,
                lastUpdated: action.receivedAt
            });
            break;

        default:
            return state
    }
};