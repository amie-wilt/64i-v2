import {
    REQUEST_TEAM_LIST, RECEIVE_TEAM_LIST
} from '../actions/teamList';

import items from '../../data/employees.js';

export default (state = {
    isFetching: false,
    items
}, action) => {
    switch (action.type) {
        case REQUEST_TEAM_LIST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TEAM_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.teamList,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}
