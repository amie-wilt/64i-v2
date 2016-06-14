import fetch from 'isomorphic-fetch'

export const REQUEST_TEAM_LIST = 'REQUEST_TEAM_LIST';
function requestTeamList() {
    return {
        type: REQUEST_TEAM_LIST
    }
}

export const RECEIVE_TEAM_LIST = 'RECEIVE_TEAM_LIST';
function receiveTeamList(teamList) {
    return {
        type: RECEIVE_TEAM_LIST,
        receivedAt: Date.now(),
        teamList
    }
}

function fetchTeamList(baseUrl = '') {
    return dispatch => {
        dispatch(requestTeamList());

        return fetch(`${baseUrl}/api/employees`)
            .then(response => response.json())
            .then(teamList => dispatch(receiveTeamList(teamList)))
            .then(payload => payload.teamList)
    }
}

export function fetchTeamListIfNeeded(baseUrl) {
    return (dispatch, getState) => {
        var { teamList } = getState();
        var teamListItems = teamList.items;

        return teamListItems.length ? Promise.resolve(teamListItems) : dispatch(fetchTeamList(baseUrl));
    }
}