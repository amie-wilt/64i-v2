import {
    REQUEST_TESTIMONIALS, RECEIVE_TESTIMONIALS
} from '../actions/testimonials';

export default (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_TESTIMONIALS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TESTIMONIALS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.testimonials,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}
