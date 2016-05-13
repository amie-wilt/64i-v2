import {
    REQUEST_CASE_STUDIES, RECEIVE_CASE_STUDIES
} from '../actions/caseStudies';

export default (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_CASE_STUDIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CASE_STUDIES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.caseStudies,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}
